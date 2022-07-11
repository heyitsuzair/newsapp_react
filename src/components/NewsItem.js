import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <div className="my-2">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !imgUrl
                ? "https://img.etimg.com/thumb/msid-92796796,width-1070,height-580,imgsize-88002,overlay-etpanache/photo.jpg"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title} ....</h5>
            <p className="card-text">{description} .....</p>
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
