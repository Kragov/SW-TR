import React from 'react';
import './index.css';
import Projects from './Projects/'
import MobileHeader from './MobileHeader/'
import Header from './Header/'


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            search: '',
        };
    }

    changeSearch = (e) => {
        this.setState({search: e.target.value})
        console.log(e.target.value)
    }

    render () {
        return (
            <>
            <header className="navbar">
                <MobileHeader changeSearch={this.changeSearch} />
                <Header changeSearch={this.changeSearch}/>
                {/* <SearchDropdown /> */}
            </header>
            <div className="main-body">

                <h1>Main Projects</h1>

                <p className="main-body-text">
                    From configuration to security, web apps to big data – whatever the infrastructure
                    needs of your application may be, there is a <strong>Spring Project</strong> to help you build it. Start
                    small and use just what you need – <strong>Spring is modular by design</strong>.
                </p>

                <div className="projects">
                    <Projects searchResult={this.state.search}/>
                </div>   
            </div>
            </>
        )
            
        
    }
}

export default App