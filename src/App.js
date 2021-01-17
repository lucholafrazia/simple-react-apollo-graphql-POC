import "./index.css";
import Home from "./Home";
import NavBar from "./Navbar";
import Spinner from "./spinner";
import { useQuery, gql } from "@apollo/client";
const ALL_FILMS = gql`
  {
    allFilms {
      films {
        id
        title
        director
      }
    }
  }
`;
const App = () => {
  const { loading, data, error } = useQuery(ALL_FILMS);

  return (
    <>
      <div className="App">
        <NavBar films={data?.allFilms} />
        <div className="content">
          {loading && <Spinner />}
          {error && <p>Whoops... Something is wrong!</p>}
          <Home films={data?.allFilms} />
        </div>
      </div>
    </>
  );
};

export default App;
