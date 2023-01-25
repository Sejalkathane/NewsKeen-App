import React,{useEffect,useState} from "react";

import NewsItem from "./NewsItem";
import Spinner  from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

// import { renderHook } from "@testing-library/react";



const News =(props)=> {

   const[articles,setArticles]=useState([])
   const[loading,setLoading]=useState([true])
   const[page,setPage]=useState(1)
   const[totalResults,setTotalResults]=useState(0)


 const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  // document.title = `${capitalizeFirstLetter(
  //   props.category
  // )}-NewsKeen`;



 const updateNews=async()=>{
       props.setProgress(10);

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&&category=${props.category}&apiKey=928f2c1b016f4b068d53200a9f33b4fa&page=${page}&pageSize=9`;
   setLoading(true)
    let data = await fetch(url);
    props.setProgress(40);
    let parsedata = await data.json();
    setArticles(parsedata.articles)
    setTotalResults(parsedata.totalResults)
    setLoading(false)
    
    props.setProgress(100);
  }

  useEffect(()=>
  {
    updateNews();
  })
  



   const fetchMoreData=async () =>
    {
      // this.state({page:this.state.page===1})
     
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&&category=${props.category}&apiKey=928f2c1b016f4b068d53200a9f33b4fa&page=${this.state.page+1}&pageSize=9`;
      setPage(page+1) 
      setLoading(true)
  let data = await fetch(url);
  let parsedata = await data.json();
  setArticles(articles.concat( parsedata.articles))
  setTotalResults( parsedata.totalResults)
  };




    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin:'35px 0px',marginTop:'90px'}}>
          News Keen Top {capitalizeFirstLetter(props.category)}{" "}
          Headline
        </h1>
        {loading && <Spinner/>}
        {/* {state.loading && <Spinner />} */}

        {/* infinite scroll */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row">
            {/* {!state.loading && */}
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>

      </div>
    );
  }


News.defaultProps = {
  country: "in",
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};


export default News;
