import React from "react";
import axios from "axios";

const URL = "http://hn.algolia.com/api/v1/search";

function Stories() {
  const [stories, setStories] = React.useState([]);
  const [error, setError] = React.useState(null);

  async function handleFetch(event) {
    let result;

    try {
      result = await axios.get(`${URL}?query=React`);

      setStories(result.data.hits);
    } catch (error) {
      setError(error);
    }
  }

  return (
    <div className="my-5">
      <button
        className="btn btn-primary my-5"
        type="button"
        onClick={handleFetch}>
        Fetch Stories
      </button>

      {error && <span className="d-block">Something went wrong ...</span>}

      <ul>
        {stories.map((story) => (
          <li key={story.objectID}>
            <a href={story.url}>{story.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Stories;
