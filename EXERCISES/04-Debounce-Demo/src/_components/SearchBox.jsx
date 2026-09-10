import { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { footballers } from "../data/football-data";

export function SearchBox() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500); // Start searching 1 second after the user stops typing
  const [results, setResults] = useState("You haven't searched yet!");

  useEffect(() => {
    if (debouncedQuery) {
      const results = footballers.filter((footballer) =>
        footballer.toLowerCase().includes(debouncedQuery.toLowerCase()),
      );
      setResults(results);
      console.log("Search results:", results);
    } else {
      setResults(["Not Found.("]);
      console.log("Search results: Not Found.(");
    }
  }, [debouncedQuery]);

  return (
    <div className="searchbox">
      <input
        className="search"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for footballers..."
      />
      <h2>Search Results:</h2>
      <p>{results[0] ?? "Not Found.("}</p>
    </div>
  );
}
