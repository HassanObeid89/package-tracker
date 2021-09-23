import { useState, useEffect } from "react";
const fs = require('fs')
const getDataLS = () => {
const data = localStorage.getItem('cards');
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
  

  // function saveData(fileName='',json=[]) {
  //    fs.writeFileSync(fileName, JSON.stringify(json))
  //    console.log(json)
  //   }


  useEffect(() => {
    if (!uri) return;
    setTimeout(() => {
      fetch(uri)
        .then((response) => response.json())
        .then(setData)
        .then(() => setLoading(false))
        .then(() => localStorage.setItem("cards", JSON.stringify(data)))
        .catch(setError);
    }, 1000);
  }, [uri]);
  

  

  return { loading, data, error };
}
