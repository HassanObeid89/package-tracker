import { useState, useEffect } from "react";
export function useFetch(uri) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    //check the cache
    if (!uri) return;
    setTimeout(() => {
      if ("caches" in window) {
        window.caches.open("my-data-caches").then((cache) => {
          cache.match(uri).then((result) => {
            if (result === undefined) {
              //fetch the request normally
              fetcher(uri, cache);
            } else {
              result.json().then((cachedData) => {
                setData(cachedData);
                setLoading(false);
              });
            }
          });
        });
      }
    }, 2000);
  }, []);

  return { loading, data, error };

  function fetcher(uri, cache) {
    fetch(uri).then((result) => {
      //make a copy
      let clonedResponse = result.clone();
      cache.put(uri, result);
      clonedResponse
        .json()
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch(setError);
    });
  }
}
