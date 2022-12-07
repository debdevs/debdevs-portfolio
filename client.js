import  sanityClient  from "@sanity/client";
import imageUrlBuilder  from "@sanity/image-url";
export const client = sanityClient({
    projectId: 'ac99yawh',
    dataset:'production',
    apiVersion:'2022-02-01',
    useCdn:true,
    token: process.env.REACT_APP_SANITY_TOKEN,
});


const builder = imageUrlBuilder({

    projectId: 'ac99yawh',
    dataset: 'production',
  })
export const urlFor = (source) => builder.image(source);



// const urlFor = (source) => builder.image(source)

