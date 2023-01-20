import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

    constructor() {
        super();
        console.log('Hello i am const from news component ');
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }


    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=928f2c1b016f4b068d53200a9f33b4fa&page=1&pageSize=21";
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({ articles: parsedata.articles, totalArticles: parsedata.totalResults })
    }

    handlePrevClick = async () => {
        console.log('Previous');
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=928f2c1b016f4b068d53200a9f33b4fa&page=${this.state.page - 1}&pageSize=21`;
        let data = await fetch(url);
        let parsedata = await data.json();


        this.setState({
            page: this.state.page - 1,
            articles: parsedata.articles
        })
    }

    handleNextClick = async () =>
     {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=928f2c1b016f4b068d53200a9f33b4fa&page=${this.state.page + 1}&pageSize=21`;
            let data = await fetch(url);
            let parsedata = await data.json();

            this.setState({
                page: this.state.page + 1,
                articles: parsedata.articles
            })
        }
    }



    render() {
        return (
            <div className="container my-3">
                <h2>News Keen Top Headline</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>

                <div className="container d-flex justify-content-between" >
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous </button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        );
    }
}

export default News;
