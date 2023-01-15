import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
    render() {
        return (
            <div className="container my-3">
               <h2>News Keen Top Headline</h2>
               
               <div className="row">

                <div className="col-md-4">
                <NewsItem title="myTitle" description="myDescription" imageUrl="https://media.cnn.com/api/v1/images/stellar/prod/230115050553-02-pokhara-plane-crash-011523.jpg?c=16x9&q=w_800,c_fill" />
                </div>

                <div className="col-md-4">
                <NewsItem title="myTitle" description="myDescription"  />
                </div>

                <div className="col-md-4">
                <NewsItem title="myTitle" description="myDescription"  />
                </div>

               </div>

            </div>
        );
    }
}

export default News;
