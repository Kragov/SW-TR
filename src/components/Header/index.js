import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import SearchDropdown from './SearchDropdown/'

let hrefsContent = ['Projects', 'Guides', 'Blog', 'Training & Certification']

class Header extends React.Component {

    constructor (props) {
        super(props) 
        this.state = {
            condition: false
        }
    }

    handleClick = () => {
        this.setState({
            condition : !this.state.condition
        })
    }

    addMenuElement () {
        return hrefsContent.map((item, index) => {
            return (
                <li className='menu-item' key={index}>
                    <a href='#'>{item}</a>
                </li>
            )
        })
    }

    render() {
        return (
            <>
            <div className="navbar-wrapper">
                <a className="navbar-logo" href="#"><span></span></a>

                <ul className="navbar-menu">
                    {this.addMenuElement()}
                    <li className={this.state.condition ? "menu-item menu-item-active" : "menu-item"} onClick={this.handleClick}><i className={this.state.condition ? "fas fa-times" : "fas fa-search"} /></li>
                </ul>
            </div>

            <div className={this.state.condition ? "search-dropdown search-dropdown-open" : "search-dropdown"}>
                <input type="text" placeholder="Type your words" className="search-text-field" onChange={this.props.changeSearch}/>
                <button className="dropdown-search-btn"><i className="fas fa-search" /></button>
            </div>
            </>
        )
    }

}

export default Header