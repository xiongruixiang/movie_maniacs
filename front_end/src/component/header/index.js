import React, {Component} from 'react';
import './index.css'
import {Button} from "antd";
import $ from "jquery";
import {withRouter} from "react-router-dom"

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchName: '',
            username: localStorage.getItem('username')
        }
    }

    searchMovie() {
        let {searchName} = this.state
        let movie_name = searchName.split(' ').join('-')
        let url = "http://127.0.0.1:8000/api/movie/" + movie_name + "/"
        $.get(url, (result) => {
            if (result.status === 200) {
                this.props.history.push({
                    pathname: '/search-result/',
                    state: {
                        searchValue: searchName,
                        searchResult: result.data,
                        message: ''
                    }
                })
            } else if (result.status === 'failed') {
                this.props.history.push({
                    pathname: '/search-result/',
                    state: {
                        searchValue: searchName,
                        searchResult: {},
                        message: result.message
                    }
                })
            }
        })
    }

    getSearchMovie(e) {
        this.setState({
            searchName: e.target.value.toLowerCase()
        })
    }

    goToHomepage() {
        this.props.history.push({
            pathname: '/'
        })
    }

    goToLoginPage() {
        this.props.history.push({
            pathname: '/login'
        })
    }

    goToSignupPage() {
        this.props.history.push({
            pathname: '/signup'
        })
    }

    logout() {
        localStorage.clear()
        if (window.location.pathname === '/') {
            this.setState({
                username: ''
            })
        } else {
            this.props.history.push('/')
        }
    }


    render() {
        let {username} = this.state
        return (
            <div className='home-top'>
                <p className='title' onClick={() => this.goToHomepage()}>Movie-Maniacs</p>
                <div className='search-login-signup'>
                    <input className='search-input' placeholder='Search Movie'
                           onChange={(e) => this.getSearchMovie(e)}/>
                    <Button className='home-button' onClick={() => this.searchMovie()}>Search</Button>
                    {username ? (
                        <div>
                            <Button className='home-button login-btn show-username'>Hi, {username}</Button>
                            <Button className='home-button signup-btn' onClick={() => this.logout()}>Logout</Button>
                        </div>
                    ) : (
                        <div>
                            <Button className='home-button login-btn'
                                    onClick={() => this.goToLoginPage()}>Login</Button>
                            <Button className='home-button signup-btn'
                                    onClick={() => this.goToSignupPage()}>Signup</Button>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default withRouter(Header)