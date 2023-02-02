import React, { useState, useEffect } from 'react';
// import { useFetcher } from 'react-router-dom';
// import { useFetcher } from '@mongez/react-hooks';


function useFetcher(action) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(action);
        const data = await response.json();
        setData(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [action])
  
  return { data, error, loading };
}

const Fetcher = () => {

    const { data, loading, error } = useFetcher('https://jsonplaceholder.typicode.com/todos/1');

  return (
    <div>
        {loading && <div>Loading...</div>}
        {error && <div>Error</div>}
        {data && <div>{data.title}</div>}
    </div>
  )
}

export default Fetcher;
