import React, {Component} from 'react';
import './index.css'
import imagesMap from '../../constants/images-map'
import {Button, Rate} from "antd";
import $ from 'jquery'
import category from '../../constants/category'
import Header from '../../component/header'

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
                this.setState({
                    topFiveMovies: result.data
                })
            }
        })
    }

    movieList() {
        let {latestMovies} = this.state
        latestMovies.map((index, item) => {
            console.log(item)
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

    goToAboutUs() {
        this.props.history.push('/about-us/')
    }

    goToCategory(name) {
        let categoryName = name.toLowerCase()
        this.props.history.push({
            pathname: '/category/' + categoryName + '/',
            state: {
                categoryName: name
            }
        })
    }

    goToAllMoviePage() {
        this.props.history.push({
            pathname: '/movie-list',
        })
    }


    render() {
        let {latestMovies, topFiveMovies} = this.state
        return (
            <div>
                <div className='home-header'>
                    <Header/>
                    <img src={imagesMap.banner} className='banner' alt='banner'/>
                </div>
                <div className='home-latest-list'>
                    <p className='title sub-title'>Explore what's streaming</p>
                    <div className='latest-movie-list'>
                        {latestMovies.map((item, index) => (
                            <div className='movie-detail' key={index}
                                 onClick={() => this.goToMovieDetail(item.movie_name)}>
                                <img src={item.image} alt='movie-name' height='280' width='200'/>
                                <p>Name: {item.movie_name}</p>
                                <p>Director: {item.director}</p>
                                <p>Rating: <span className='rating'>{item.rating}</span></p>
                                <Rate disabled defaultValue={item.rating}/>
                            </div>
                        ))}
                        <div className='get-more'>
                            <button onClick={() => this.goToAllMoviePage()}>Get More Movies</button>
                        </div>
                    </div>
                </div>
                <div className='category-list'>
                    <p className='title sub-title'>Categories</p>
                    <div className='latest-movie-list'>
                        {category.map((item, index) => (
                            <div className='movie-detail' key={index} onClick={() => this.goToCategory(item.name)}>
                                <img src={item.image} alt='movie-name' height='280' width='200'/>
                                <p className='category-name'><a>{item.name}</a></p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='category-list'>
                    <p className='title sub-title'>Top 5 movies</p>
                    <div className='latest-movie-list'>
                        {topFiveMovies.map((item, index) => (
                            <div className='movie-detail' key={index} onClick={() => this.goToMovieDetail(item.movie_name)}>
                                <img src={item.image} alt='movie-name' height='280' width='200'/>
                                <p>Name: {item.movie_name}</p>
                                <p>Director: {item.director}</p>
                                <p>Rating: <span className='rating'>{item.rating}</span></p>
                                <Rate disabled defaultValue={item.rating}/>
                            </div>
                        ))}
                    </div>
                </div>
                <footer className='home-footer'>
                    <a onClick={() => this.goToAboutUs()}>--about us--</a>
                </footer>
            </div>
        )
    }
}