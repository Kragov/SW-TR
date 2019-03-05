import React from 'react';
import { connect } from 'react-redux'
import './index.css';
import {setCondition} from '../../actions/conditionActions'
import {changeSearch} from '../../actions/searchActions';

let hrefsContent = ['Projects', 'Guides', 'Blog', 'Training & Certification']

class MobileHeader extends React.Component {

    handleClick = () => {
        
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
                <div className={this.props.condition ? "mobile-navbar mobile-navbar-open" : "mobile-navbar"}>
                    <div className="mobile-navbar-wrapper">
                        <ul className="mobile-navbar-menu">
                            <div className="mobile-search">
                                <div className="mobile-search-wrapper">
                                    <input type="text" placeholder="Type your words" className="mobile-search-text-field" onChange={(e) => this.props.changeSearch(e.target.value)}/>
                                    <button className="search-btn"><i className="fas fa-search"></i></button>
                                </div>
                            </div>                            
                            
                            {this.addMenuElement()}                            
                        </ul>
                    </div>
                </div>

                <div className={this.props.condition ? "hamburger hamburger-opened-sidepane" : "hamburger"} onClick={() => {this.props.setCondition()
                                                                                                                            document.querySelector('body').classList.toggle('hidden-overflow')
                                                                                                                            document.querySelector('.mobile-navbar').style.height = window.innerHeight + 'px'
                                                                                                                            }}><i className="fas fa-bars"></i></div>

                <a className={this.props.condition ? "mobile-navbar-logo hamburger-opened-sidepane" : "mobile-navbar-logo"} href="#">
                    <span></span>
                </a>
            </>

        )
    }
}

const mapStateToProps = state => {
    const { condition } = state.condition;
    const { search } = state.search;
    return {
        condition,
        search  
    }
}

const mapDispatchToProps = {
    setCondition,
    changeSearch,
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileHeader)