import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !imageUrl
                ? "https://media.istockphoto.com/id/1181901573/vector/latest-news-isolated-icon-megaphone-or-bullhorn-breaking-report-vector-info-announcement-and.jpg?s=612x612&w=0&k=20&c=-nJ0115sP5-80iihi09TzKptTL4YJcoP2uVtaYt7oZg="
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {source}
              </span>
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-danger">
                by {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="blank" className="btn1">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;