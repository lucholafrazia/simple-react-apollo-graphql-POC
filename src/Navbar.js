import { gql, useLazyQuery } from "@apollo/client";

const GET_DIRECTOR_MOVIES = gql`
  query getDirectorMovies($director: String!) {
    allFilms {
      films(director: $director) {
        id
        title
        director
      }
    }
  }
`;

const NavBar = ({ films }) => {
  const [getMovies, { loading, data }] = useLazyQuery(GET_DIRECTOR_MOVIES);

  const filterByDirector = (name) => {
    console.log("name", name);
    getMovies({ variables: { director: name } });
    console.log("data: ", data);
  };

  const filteredArr = films.films?.reduce((acc, current) => {
    const x = acc.find((item) => item.director === current.director);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        {filteredArr?.map((film) => (
          <a onClick={() => filterByDirector(film.director)}>{film.director}</a>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
