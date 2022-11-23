import data from '../public/project_data'




export const getStaticProps = async () => {
  return {
    props: {
      playlistLists: data.projects,
    },
  };
};

export default ({ playlistLists }) => (
  <>

    <div>
      {data.projects.map((playlistList) => (
        <div key={playlistList.id} {...playlistList} />
      ))}
    </div>
  </>
);