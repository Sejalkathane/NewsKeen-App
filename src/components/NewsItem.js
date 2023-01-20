import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imageUrl ? "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2023/01/GettyImages-1246245000-e1673777141311.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="blank" className="btn btn-sm btn-dark ">Read More</a>
                    </div>
                </div>
            </div >
        )
    }
}

export default NewsItem

