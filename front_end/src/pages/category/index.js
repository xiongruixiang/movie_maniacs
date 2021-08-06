import React, { Component } from 'react';
import './index.css'
import Header from "../../component/header";
import $ from 'jquery'
import {Rate} from "antd";

export default class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieList: []
        }
    }

    componentDidMount() {
        this.getMoviesByCategory(this.props.location.state.categoryName)
    }

    getMoviesByCategory(name) {
        let categoryName = name.toLowerCase()
        let url = 'http://127.0.0.1:8000/api/category/' + categoryName + '/'
        $.get(url, (result) => {
            if (result.status === 200) {
                this.setState({
                    movieList: result.data
                })
            }
        })
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
        let { categoryName } = this.props.location.state
        let { movieList } = this.state
        return (
            <div>
                <Header />
                <p className='title sub-title'>{categoryName} Movies</p>
                <div className='all-movie-list'>
                        {movieList.map((item, index) => (
                            <div className='each-movie-detail' key={index} onClick={() => this.goToMovieDetail(item.movie_name)}>
                                <img src={item.image} alt='movie-name' height='280' width='200'/>
                                <p>Name: {item.movie_name}</p>
                                <p>Director: {item.director}</p>
                                <p>Rating: <span className='rating'>{item.rating}</span></p>
                                <Rate disabled defaultValue={item.rating} />
                            </div>
                        ))}
                </div>
                <footer className='home-footer'>
                    <a>--The End--</a>
                </footer>
            </div>
        )
    }
}