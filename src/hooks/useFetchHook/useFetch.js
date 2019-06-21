import React, { useState, useEffect } from "react";

export const useFetch = (url,dependencies) => {
  const [isLoading, setLoading] = useState(false);
  const [fetchData, setFetchData] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then(data => {
        if (res.length) {
          setLoading(false);
          setFetchData(data);
        }
      })
      .catch(() => {
        console.log("Error from API" + err);
        setLoading(false);
      });
  },dependencies);

  return [isLoading, fetchData];
};
