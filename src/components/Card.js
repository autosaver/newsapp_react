import React from 'react';
// 0:
// author: "Pranav Mukul"
// content: "THE LATEST surge in Covid cases has led to a dip in demand for air travel, forcing airlines to rework their domestic schedules and even cancel flights.On Sunday, the countrys largest airline IndiGo a… [+2582 chars]"
// description: "🔴 According to data from the Ministry of Civil Aviation, domestic air passenger numbers have been witnessing a fall since two weeks ago when Covid cases started surging and various states began imposing restrictions."
// publishedAt: "2022-01-09T23:11:08Z"
// source: {id: null, name: 'The Indian Express'}
// title: "Airlines face demand dip, IndiGo waives ticket change fee - The Indian Express"
// url: "https://indianexpress.com/article/india/cancellation-capacity-cut-covid-flights-7714781/"
// urlToImage: "https://images.indianexpress.com/2022/01/AMRITSAR-AIRPORT-1.jpg"
// [[Prototype]]: Object





export default function card(props) {

    let altimage = "https://www.euractiv.com/wp-content/uploads/sites/2/2014/03/news-default.jpeg";

    return (
        <a href={props.element.url} target='_blank' rel="noreferrer" style={{color:'black'}}>
            <div className="card" >
                <img className="card-img-top" src={props.element.urlToImage ? props.element.urlToImage : altimage} alt='...' width="220" height="190" />
                <div className="card-body">
                    <h5 className="card-title">{props.element.title.slice(0, 40)}...</h5>
                    <p className="card-text">{props.element.description ? props.element.description.slice(0, 80) : 'Click to view'}...</p>
                </div>
            </div>
        </a>
    )
}
