import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [news, setNews] = useState({});
  const params = useParams()

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem('news')).filter((item, index) => {
      return index == params.id
    })

    setNews(arr[0]);

  }, []);

  return <>
  
  {news.content}

  </>;
};

export default Details;
