import React, {Component} from 'react';
import './index.css'
import {Rate} from "antd";
import $ from 'jquery'
import Header from "../../component/header";

export default class AllMovies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieList: []
        }
    }

    componentDidMount() {
        this.getAllMovies()
    }

    getAllMovies() {
        let url = 'http://127.0.0.1:8000/api/movie_list/'
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
        let {movieList} = this.state
        return (
            <div>
                <Header/>
                <p className='title sub-title'>All Movies</p>
                <div className='all-movie-list'>
                    {movieList.map((item, index) => (
                        <div className='each-movie-detail' key={index}
                             onClick={() => this.goToMovieDetail(item.movie_name)}>
                            <img src={item.image} alt='movie-name' height='280' width='200'/>
                            <p>Name: {item.movie_name}</p>
                            <p>Director: {item.director}</p>
                            <p>Rating: <span className='rating'>{item.rating}</span></p>
                            <Rate disabled defaultValue={item.rating}/>
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