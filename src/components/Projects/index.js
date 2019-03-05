import React from 'react';
import './index.css';
import { connect } from 'react-redux'



class Projects extends React.Component {
    renderProjects () {
        return this.props.projects.filter(item => !item.projectTitle.toLowerCase().includes(this.props.search.toLowerCase()) ? false : true
        ).map((item, index) => {
            return (
                <div className="project-container" key={index}>
                <div className="project-logo-container">
                    <div className={item.projectLogoClass[0] + ' ' + item.projectLogoClass[1]}></div>
                </div>
                <div className="project-title">{item.projectTitle}</div>
                <div className="project-text">{item.projectText}</div>
            </div>
            )
        })
    
    }

    render() {
        return this.renderProjects()
    }
}

const mapStateToProps = state => {
    const { search, projects } = state.products;
    return {
        search,
        projects
    }
}

export default connect (mapStateToProps, null)(Projects)