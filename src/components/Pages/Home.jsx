import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const abortCont = new AbortController();
    async function fetchData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
          signal: abortCont.signal,
        });
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log("Error fetching data...");
        if (error.name === "AbortError") {
          console.log("Abort Error... ====>>", error);
        } else {
          setError(error.message);
        }
      }
    }

    fetchData();

    return () => abortCont.abort();
  }, [error]);

  return (
    <main>
      <h1>Posts</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {data.map((p) => (
          <li key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
