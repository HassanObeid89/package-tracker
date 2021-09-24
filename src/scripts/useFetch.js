
// export function useFetch(uri) {

//   const [data, setData] = useState(getDataLS());
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState();

// useEffect(() => {
//   if (!uri) return;
//   setTimeout(() => {
//     fetch(uri)
//       .then((response) => response.json())
//       .then(setData)
//       .then(() => setLoading(false))
//       .then(() => localStorage.setItem("cards", JSON.stringify(data)))
//       .catch(setError);
//   }, 1000);
// }, [uri]);

//   return { loading, data, error };
// }
import { useState, useEffect } from "react";
export function useFetch(uri) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    //const uri = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";
  //check the cache
  if (!uri) return;
  setTimeout(() => {
  if ("caches" in window) {
    window.caches.open("my-data-caches").then((cache) => {
      cache.match(uri).then((result) => {
        if (result === undefined) {
          //fetch the request normally
          fetcher(uri, cache)
        } else {
          result.json().then((cachedData) => {
            setData(cachedData);
            setLoading(false)
          });
        }
      });
    });
  }
}, 2000);
  }, [])
  
  return { loading, data };

  function fetcher(uri, cache) {
    fetch(uri).then((result) => {
      //make a copy
      let clonedResponse = result.clone();
      cache.put(uri, result);
      clonedResponse.json().then((data) => {
        setData(data);
        setLoading(false)
      });
    });
  }
}
