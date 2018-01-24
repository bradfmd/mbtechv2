import React from 'react'
import logo from "../images/mbt_logo1.png"
import logo_white from "../images/mbt_logo_white.png"

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <img src={logo} alt="mb tech logo" width="75%" style={{ marginTop: 20 }} />
        </div>
        <div className="content">
            <div className="inner">
                <h1>mb technologies</h1>
                <p>
                    Custom software development
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
