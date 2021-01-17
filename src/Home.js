import List from "./List";

const Home = ({ films }) => {
  return (
    <div className="home">
      <List items={films} title="All Movies" />
    </div>
  );
};

export default Home;
