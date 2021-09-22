import { useState, useEffect } from "react";
const getDataLS = () => {
  const data = localStorage.getItem("cards");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
export function useFetch(uri) {
  const [data, setData] = useState(getDataLS());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    if (!uri) return;
    setTimeout(() => {
      fetch(uri)
        .then((data) => data.json())
        .then(setData)
        .then(() => setLoading(false))
        .then(() => localStorage.setItem("cards", JSON.stringify(data)))
        .catch(setError);
    }, 1000);
  }, [uri]);

  return { loading, data, error };
}
