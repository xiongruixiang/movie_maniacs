import {Button} from "antd";
import React from "react";

const Header = () => {
    return (
        <div className='home-top'>
            <p className='title'>Movie-Maniacs</p>
            <div className='search-login-signup'>
                <input className='search-input' placeholder='Search Movie' onChange={(e) => this.getSearchMovie(e)}/>
                <Button className='home-button' onClick={() => this.searchMovie()}>Search</Button>
                <Button className='home-button login-btn'>Login</Button>
                <Button className='home-button signup-btn'>Signup</Button>
            </div>
        </div>
    )
}

export default Header