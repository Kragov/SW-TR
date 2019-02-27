import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';

let hrefsContent = ['Projects', 'Guides', 'Blog', 'Training & Certification']

class MobileHeader extends React.Component {

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
        document.querySelector('body').classList.toggle('hidden-overflow')
        document.querySelector('.mobile-navbar').style.height = window.innerHeight + 'px'
    }
    

    addMenuElement () {
        return hrefsContent.map((item, index) => {
            return (
                <li className='mobile-menu-item' key={index}>
                    <a href='#'>{item}</a>
                    <i className="fas fa-angle-right" />
                </li>
            )
        })
    }

    render() {
        return ( 
            <>
                <div className={this.state.condition ? "mobile-navbar mobile-navbar-open" : "mobile-navbar"}>
                    <div className="mobile-navbar-wrapper">
                        <ul className="mobile-navbar-menu">
                            <div className="mobile-search">
                                <div className="mobile-search-wrapper">
                                    <input type="text" placeholder="Type your words" className="mobile-search-text-field" onChange={this.props.changeSearch}/>
                                    <button className="search-btn"><i className="fas fa-search"></i></button>
                                </div>
                            </div>                            
                            
                            {this.addMenuElement()}                            
                        </ul>
                    </div>
                </div>

                <div className={this.state.condition ? "hamburger hamburger-opened-sidepane" : "hamburger"} onClick={this.handleClick}><i className="fas fa-bars"></i></div>

                <a className={this.state.condition ? "mobile-navbar-logo hamburger-opened-sidepane" : "mobile-navbar-logo"} href="#">
                    <span></span>
                </a>
            </>

        )
    }
}

export default MobileHeader