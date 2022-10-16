import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Explore = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch(
      //   `https://newsapi.org/v2/top-headlines?country=us&apiKey=9ba6197398074565a30dc756ee82b8d0`
      // );
      // const newsData = await response.json();
      // setNews(newsData.articles);
      // localStorage.setItem('news', JSON.stringify(newsData.articles));

      const data = JSON.parse(localStorage.getItem('news'))
      setNews(data)
    };

    fetchData()
  }, []);

  return (
    <Row xs={2} md={4} className="g-4">
      {news?.map((item, idx) => (
        <Col key={new Date().getTime() + idx}>
          <Card style={{ margin: "10px" }}>
            <Card.Img style={{aspectRatio: '3/2', objectFit: 'cover'}} variant="top" src={item?.urlToImage} />
            <Card.Body>
              {/* <Card.Text>
                {item.description}
              </Card.Text> */}
              <Link to={`/details/${idx}`}>
              <Card.Title>{item?.title.slice(0, 40)}...</Card.Title>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Explore;
