import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const App = () => {
  const [markdown, setMarkdown] = useState("# Mark down previewer");
  return (
    <main>
      <section className="markdown">
        <textarea
          value={markdown}
          className="input"
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown children={markdown} />
        </article>
      </section>
    </main>
  );
};

export default App;
