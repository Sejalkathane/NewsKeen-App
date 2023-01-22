import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { Spinner } from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps={
        country:'in',
        category:'general'
    }
    static propTypes={
        country:PropTypes.string,
        category:PropTypes.string
    }

    constructor() {
        super();
        console.log('Hello i am const from news component ');
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }


    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&&category=${this.props.category}&apiKey=928f2c1b016f4b068d53200a9f33b4fa&page=${this.state.page}&pageSize=9`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({
            articles: parsedata.articles, totalArticles: parsedata.totalResults,
            loading: false
        })
    }

    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&&category=${this.props.category}&apiKey=928f2c1b016f4b068d53200a9f33b4fa&page=1&pageSize=9`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedata = await data.json();
        // this.setState({
        //     articles: parsedata.articles, totalArticles: parsedata.totalResults,
        //     loading: false
        // })
        this.updateNews(); 
    }

    handlePrevClick = async () => {
        // console.log('Previous');
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=928f2c1b016f4b068d53200a9f33b4fa&page=${this.state.page - 1}&pageSize=9`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedata = await data.json();


        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedata.articles,
        //     loading: false
        // })

      this.setState({page: this.state.page-1});
      this.updateNews(); 
    }

    handleNextClick = async () => {
        // if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        // }
        // else {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=928f2c1b016f4b068d53200a9f33b4fa&page=${this.state.page + 1}&pageSize=9`;
        //     this.setState({ loading: true });
        //     let data = await fetch(url);
        //     let parsedata = await data.json();

        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: parsedata.articles,
        //         loading: false
        //     })
        // }

        this.setState({page: this.state.page+1});
        this.updateNews();
    }



    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center">News Keen Top Headline</h1>
                {this.state.loading && <Spinner />}

                <div className="row">

                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                        </div>
                    })}
                </div>

                <div className="container d-flex justify-content-between" >
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous </button>

                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)}>Next &rarr;</button>
                </div>
            </div>
        );
    }
}

export default News;