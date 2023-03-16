import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetch(url, type='get') {

  const [ data, setData ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  const Axios = (type) => {
    if (type === 'post') return axios.post;
    else return axios.get;
  }

  const callFetch = () => {
    setLoading(true);

    Axios()(`${process.env.REACT_APP_API_URL}/${url}`)
    .then(res => {
      setData(res.data);
    })
    .catch(err => {
      setError(err)
    })
    .finally(() => {
      setLoading(false);
    })
  }

  useEffect(() => {
    callFetch();
  }, [url])

  const refetch = () => {
    callFetch();
  }

  return {
    data, 
    loading, 
    error,
    refetch
  }
}
