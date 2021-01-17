const List = ({ items, title }) => {
  return (
    <div className="list">
      <h2> {title}</h2>
      {items.films?.map((film) => (
        <div className="blog-preview" key={film.id}>
          <h2>{film.title}</h2>
          <p>Directed By {film.director}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
