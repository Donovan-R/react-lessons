const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="ss" />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <p>{2 + 2}</p>
    </article>
  );
};

export default Book;
