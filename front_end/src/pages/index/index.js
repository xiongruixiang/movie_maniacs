import React, { Component } from 'react';
import './index.css'
import imagesMap from '../../constants/images-map'
import { Button, Rate } from "antd";
import $ from 'jquery'
import category from '../../constants/category'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchName: '',
            latestMovies: [],
            topFiveMovies: []
        }
    }

    componentDidMount() {
        this.getLatestMovies()
        this.getTopFiveMovies()
    }

    getLatestMovies() {
        let url = 'http://127.0.0.1:8000/api/movie/latest_five_movies/'
        $.get(url, (result) => {
            if (result.status === 200) {
                console.log(result.data)
                this.setState({
                    latestMovies: result.data
                })
            }
        })
    }

    getTopFiveMovies() {
        let url = 'http://127.0.0.1:8000/api/movie/top_five_movies/'
        $.get(url, (result) => {
            if (result.status === 200) {
                console.log(result.data)
                this.setState({
                    topFiveMovies: result.data
                })
            }
        })
    }

    getSearchMovie(e) {
        this.setState({
            searchName: e.target.value.toLowerCase()
        })
    }

    searchMovie() {
        let { searchName } = this.state
        let movie_name = searchName.split(' ').join('-')
        let url="http://127.0.0.1:8000/api/movie/" + movie_name + "/"
        $.get(url, (result) => {
            console.log(result)
            // do something
        })
    }

    movieList() {
        let { latestMovies } = this.state
        latestMovies.map((index, item) => {
            console.log(item)
        })

    }

    goToMovieListByCat(category) {

    }


    render() {
        let { latestMovies, topFiveMovies } = this.state
        return (
            <div>
                <div className='home-header'>
                    <div className='home-top'>
                        <p className='title'>Movie-Maniacs</p>
                        <div className='search-login-signup'>
                            <input className='search-input' placeholder='Search Movie' onChange={(e) => this.getSearchMovie(e)} />
                            <Button className='home-button' onClick={() => this.searchMovie()}>Search</Button>
                            <Button className='home-button login-btn'>Login</Button>
                            <Button className='home-button signup-btn'>Signup</Button>
                        </div>
                    </div>
                    <img src={imagesMap.banner} className='banner' alt='banner' />
                </div>
                <div className='home-latest-list'>
                    <p className='title sub-title'>Explore what's streaming</p>
                    <div className='latest-movie-list'>
                        {latestMovies.map((item, index) => (
                            <div className='movie-detail' key={index}>
                                <img src={item.image} alt='movie-name' height='280' width='200'/>
                                <p>Name: {item.movie_name}</p>
                                <p>Director: {item.director}</p>
                                <p>Rating: <span className='rating'>{item.rating}</span></p>
                                <Rate disabled defaultValue={item.rating} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='category-list'>
                    <p className='title sub-title'>Categories</p>
                    <div className='latest-movie-list'>
                        {category.map((item, index) => (
                            <div className='movie-detail' key={index}>
                                <img src={item.image} alt='movie-name' height='280' width='200'/>
                                <p className='category-name'><a onClick={() => this.goToMovieListByCat()}>{item.name}</a></p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='category-list'>
                    <p className='title sub-title'>Top 5 movies</p>
                    <div className='latest-movie-list'>
                        {topFiveMovies.map((item, index) => (
                            <div className='movie-detail' key={index}>
                                <img src={item.image} alt='movie-name' height='280' width='200'/>
                                <p>Name: {item.movie_name}</p>
                                <p>Director: {item.director}</p>
                                <p>Rating: <span className='rating'>{item.rating}</span></p>
                                <Rate disabled defaultValue={item.rating} />
                            </div>
                        ))}
                    </div>
                </div>
                <footer className='home-footer'>
                    <a>--about us--</a>
                </footer>
            </div>
        )
    }
}