import React from 'react';
import { connect } from 'react-redux'
import './index.css';
import {setCondition} from '../../actions/conditionActions'
import {changeSearch} from '../../actions/searchActions';

let hrefsContent = ['Projects', 'Guides', 'Blog', 'Training & Certification']

class Header extends React.Component {

    // constructor (props) {
    //     super(props) 
    //     this.state = {
    //         condition: false
    //     }
    // }

    // handleClick = () => {
    //     this.setState({
    //         condition : !this.state.condition
    //     })
    // }

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
        console.log(this.props)
        console.log(this.props.condition)
        return (
            <>
            <div className="navbar-wrapper">
                <a className="navbar-logo" href="#"><span></span></a>

                <ul className="navbar-menu">
                    {this.addMenuElement()}
                    <li className={this.props.condition ? "menu-item menu-item-active" : "menu-item"} onClick={() => this.props.setCondition()}><i className={this.props.condition ? "fas fa-times" : "fas fa-search"} /></li>
                </ul>
            </div>

            <div className={this.props.condition ? "search-dropdown search-dropdown-open" : "search-dropdown"}>
                <input type="text" placeholder="Type your words" className="search-text-field" onChange={(e) => this.props.changeSearch(e.target.value)} value={this.props.search}/>
                <button className="dropdown-search-btn"><i className="fas fa-search" /></button>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)