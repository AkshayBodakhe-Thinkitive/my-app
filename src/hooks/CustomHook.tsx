import { useState, useEffect } from 'react';
function useFetchData(url: any):any {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error:any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
}
export default useFetchData;
