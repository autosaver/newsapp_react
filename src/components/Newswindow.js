import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from './Card'
import Spinner from './Spinner';


export default class Newswindow extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            total_pages: 0,
            page: 1,
        }
    };

    async componentDidMount() {
        this.setState({
            loading: true,
        })
        let url = `${this.props.baseurl}&page=${this.state.page}&category=${this.props.category}`;
        let data = await fetch(url);
        let parseddata = await data.json();
        // console.log(parseddata);
        this.setState({
            articles: parseddata.articles,
            loading: false,
            total_pages: Math.ceil(parseddata.totalResults / 20),
        });
    };

    // prevpage = async () => {
    //     this.setState({
    //         loading: true,
    //     })
    //     let url = `${this.props.baseurl}&page=${this.state.page - 1}&category=${this.props.category}`;
    //     let data = await fetch(url);
    //     let parseddata = await data.json();
    //     this.setState({
    //         page: this.state.page - 1,
    //         loading: false,
    //         articles: parseddata.articles,
    //     });

    // };

    // nextpage = async () => {
    //     this.setState({
    //         loading: true,
    //     })

    //     let url = `${this.props.baseurl}&page=${this.state.page + 1}&category=${this.props.category}`;
    //     let data = await fetch(url);
    //     let parseddata = await data.json();
    //     this.setState({
    //         page: this.state.page + 1,
    //         loading: false,
    //         articles: parseddata.articles,
    //     });
    // };


    fetchData = async () => {
        this.setState({
            page: this.state.page + 1
        })
        let url = `${this.props.baseurl}&page=${this.state.page}&category=${this.props.category}`;
        let data = await fetch(url);
        let parseddata = await data.json();
        // console.log(parseddata);
        this.setState({
            articles: this.state.articles.concat(parseddata.articles),
        });
    };
    

    render() {
        return (<>
            {/* <div className="container d-flex justify-content-between">
                <button disabled={this.state.page <= 1} type="button" className="btn rounded" onClick={this.prevpage}><img alt='...' src="https://img.icons8.com/external-prettycons-lineal-prettycons/49/000000/external-left-arrow-orientation-prettycons-lineal-prettycons.png"/></button>
                
                <button disabled={this.state.page >= this.state.total_pages} type="button" className="btn rounded" onClick={this.nextpage}><img alt='...' src="https://img.icons8.com/ios/50/000000/arrow--v1.png"/></button>
            </div>
            */}
            {/* {this.state.loading && <Spinner/>}  */}
            <h2 className="text-center" style={{marginTop:'90px'}}>{`Top ${this.props.category} headlines in the India right now`}</h2>
            <InfiniteScroll
                dataLength={this.state.articles.length} //This is important field to render the next data
                next={this.fetchData}
                hasMore={this.state.page !== this.state.total_pages}
                loader={<Spinner />}
            >
                
                    <div className="row">
                        {this.state.articles.map((element) => {
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
