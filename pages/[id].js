import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'

import { client } from 'client'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    }
  }
}

const Post = ({projects}) => {
  const {

    name = 'Missing name',
    categories,
    authorImage,
    body = []
  } = projects
  return (
    <article>
      <h1>{name}</h1>
      <span>By {name}</span>
      {categories && (
        <ul>
          Posted in
          {categories?.map(category => <li key={category}>{category}</li>)}
        </ul>
      )}
      {authorImage && (
        <div>
          <img
            src={urlFor(authorImage)
              .width(50)
              .url()}
            alt={`${name}'s picture`}
          />
        </div>
      )}

    </article>
  )
}

const query = groq`*[_type == "projects"]`
export async function getStaticPaths() {
  const paths = await client?.fetch(query).then(
    groq`*[_type == "projects"]`
  )




  return {
    paths: paths?.map((link) => ({params: {link}}, {params: { id: "showman-video" }})),
    fallback: true,
    
  }
}

export async function getStaticProps(context) {
  // It's important to default the link so that it doesn't return "undefined"
  const { link = "" } = context.params
  const projects = await client?.fetch(query, { link })
  return {
    props: {
      projects
    }
  }
}
export default Post