import React, { Component } from "react";
import axios from "axios";
import "./News.css";

function Item({ item }) {
  const formatDate = (s) =>
    new Date(s).toLocaleDateString(undefined, { dateStyle: "long" });
  return (
    <li className="item">
      {item.image && (
        <img
          className="thumbnail"
          alt=""
          src={item.image?.thumbnail?.contentUrl}
        />
      )}
      <h2 className="title">
        <a href={item.url}>{item.name}</a>
      </h2>
      <p className="description">{item.description} </p>
      <div className="meta">
        <span>{formatDate(item.datePublished)}</span>
        <span className="provider">
          {item.provider[0].image?.thumbnail && (
            <img
              className="provider-thumbnail"
              alt=""
              src={item.provider[0].image.thumbnail.contentUrl + "&w=16&h=16"}
            />
          )}
          {item.provider[0].name}
        </span>
      </div>
    </li>
  );
}

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  async searchNews() {
    const options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news/search",
      params: {
        q: "Coronavirus",
        freshness: "Day",
        textFormat: "Raw",
        safeSearch: "Off",
      },
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        "X-RapidAPI-Key": "10b13bc3a0mshf645030668199bcp1597b5jsn4b5e3eff7cfa",
      },
    };

    await axios
      .request(options)
      .then((res) => {
        const data = res.data;
        this.setState({ list: data }, () => {
          console.log(this.state.list);
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  async componentDidMount() {
    this.searchNews();
  }

  render() {
    const { list } = this.state;
    return (
      <div className="container">
        {!list ? null : list.length === 0 ? (
          <p>
            <i>No results</i>
          </p>
        ) : (
          <ul>
            {list.value.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}
