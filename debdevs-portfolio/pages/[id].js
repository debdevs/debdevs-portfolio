
import data from '../public/project_data'

import NextLink from 'next/link';

export const getStaticProps = async ({ params }) => {
  const playlistList = data.projects.filter((p) => p.id.toString() === params.id);
  return {
    props: {
      song: playlistList[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = data.projects.map((song) => ({
    params: { id: song.id.toString() },
  }));

  return { paths, fallback: false };
};

export default ({ song }) => (
  <div>
    <h1 fontWeight='800'>{song.name}</h1>

    <NextLink href='/' passHref>
      <button>
        Back
      </button>
    </NextLink>
  </div>
);