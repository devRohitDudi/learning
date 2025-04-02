import { useState, useEffect } from "react";

import Joke from "./components/Joke";

function App() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getJokes = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/jokes"); // added proxy in config file
      const data = await response.json();
      if (response) {
        setJokes(data);
        console.log(data);
        setLoading(false);
      }
    } catch (error) {
      setError(error);
      console.log("Error: ", error);

      setLoading(false);
    }
  };

  useEffect(() => {
    getJokes();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-700 text-white">
      {error && <h1>Error occured! </h1>}
      {loading ? <h1>Loading... </h1> : <h1>Data is available</h1>}

      <div className="w-[600px] flex flex-col justify-center items-center gap-3 p-3">
        {jokes &&
          jokes.map((joke) => {
            return <Joke key={joke.id} currentJoke={joke} />;
          })}
      </div>
    </div>
  );
}

export default App;
