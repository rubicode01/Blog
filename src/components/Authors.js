import React from "react";
import { Container } from "react-bootstrap";
// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Authors() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/authors")
      .then((res) => res.json())
      .then((data) => {
        setAuthors(data);
      })

      .catch((error) => console.log(error));
  }, []);

  // const allAuthors = [...posts];

  return (
    <>
      <Container className="carddesign containerdesign rowdesign">
        {authors.length > 0 ? (
          <>
            <h3>Authors</h3>
            {authors.map((author) => (
              <div key={author.id}>
                <img
                  src="./author.png"
                  alt="author"
                  className="rounded-circle mb-3"
                  style={{ width: "150px" }}
                />
                <strong>
                  <p>
                    {author.first_name} <br />
                    {author.last_name}
                  </p>
                </strong>
              </div>
            ))}
          </>
        ) : (
          <div>is loading</div>
        )}
      </Container>
      {/* <Container className="carddesign containerdesign rowdesign">
        {allAuthors.length > 0 && (
          <>
            <h2>Authors</h2>
            {allAuthors.map((post) => (
              // <p className="info">{post.fields.author}</p>

              <div>
                <img
                  src="./author.png"
                  alt="author"
                  className="rounded-circle mb-3"
                  style={{ width: "150px" }}
                />
                <strong>
                  <p>{post.author_id}</p>
                </strong>
                <p>Author </p>
              </div>
            ))}
          </>
        )}
      </Container> */}
    </>
  );
}

export default Authors;
