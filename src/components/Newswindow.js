import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from './Card'
import Spinner from './Spinner';


export default class Newswindow extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            total_pages: 0,
            page: 1,
        }
    };

    async componentDidMount() {
        let url = `${this.props.baseurl}&page=${this.state.page}&category=${this.props.category}`;
        let data = await fetch(url);
        let parseddata = await data.json();
        // console.log(parseddata);
        this.setState({
            articles: parseddata.articles,
            total_pages: Math.ceil(parseddata.totalResults / 20),
        });
    };

    fetchData = async () => {
        let url = `${this.props.baseurl}&page=${this.state.page+1}&category=${this.props.category}`;
        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({
            articles: this.state.articles.concat(parseddata.articles),
            page: this.state.page + 1
        });
    };
    

    render() {
        return (<>
            <h2 className="text-center" style={{marginTop:'90px'}}>{`Top ${this.props.category} headlines in the India right now`}</h2>
            <InfiniteScroll
                dataLength={this.state.articles?this.state.articles.length:0} //This is important field to render the next data
                next={this.fetchData}
                hasMore={this.state.page !== this.state.total_pages}
                loader={<Spinner />}
            >
                
                    <div className="row">
                        {this.state.articles&&this.state.articles.map((element) => {
                            return (
                                <div className="col-3 my-2" key={element.url}>
                                    <Card element={element} />
                                </div>
                            )
                        })}
                    </div>
            </InfiniteScroll>
        </>
        )
    }
}
