const Book = (props) => {
  const { img, title, author } = props;
  const handleClick = (e) => {
    console.log(e.target);
    alert("hello");
  };

  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article className="book">
      <img src={img} alt="ss" />
      <h2 onMouseOver={() => console.log(title)}>{title}</h2>
      <h4>{author}</h4>
      <button type="button" onClick={handleClick}>
        exemple
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        exemple plus complexe
      </button>
    </article>
  );
};

export default Book;
