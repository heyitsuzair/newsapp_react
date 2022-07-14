import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } =
      this.props;

    return (
      <div className="my-2">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={imgUrl}
            className="card-img-top"
            style={{ height: "200px" }}
            alt=""
          />
          <div className="card-body">
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ left: "90%", zIndex: "1" }}
            >
              {source}
            </span>
            <h5 className="card-title">{title} ....</h5>
            <p className="card-text">{description} .....</p>
            <p className="card-text">
              <small className="text-muted">
                By {author == null ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-dark btn-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
