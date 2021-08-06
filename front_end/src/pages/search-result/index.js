import React, {Component} from 'react';
import './index.css'
import Header from '../../component/header'
import {Rate, Empty} from "antd";
import $ from "jquery";

export default class SearchResult extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    goToMovieDetail(movie_name) {
        let movie_name_slug = movie_name.toLowerCase().split(' ').join('-')
        this.props.history.push({
            pathname: '/movie/' + movie_name_slug + '/',
            state: {
                movie_name_slug: movie_name_slug
            }
        })
    }

    render() {
        let {searchValue, searchResult, message} = this.props.location.state
        return (
            <div>
                <Header/>
                <p className='title sub-title'>The search results for "{searchValue}"</p>
                {Object.keys(searchResult).length === 0 ? (
                    <div className='empty-show'>
                        <Empty description={false} imageStyle={{height: 200, width: 200}}/>
                        <p className='message'>{message}</p>
                    </div>
                ) : (
                    <div className='latest-movie-list'>
                        <div className='movie-detail' onClick={() => this.goToMovieDetail(searchResult.movie_name)}>
                            <img src={searchResult.image} alt='movie-name' height='280' width='200'/>
                            <p>Name: {searchResult.movie_name}</p>
                            <p>Director: {searchResult.director}</p>
                            <p>Rating: <span className='rating'>{searchResult.rating}</span></p>
                            <Rate disabled defaultValue={searchResult.rating}/>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}