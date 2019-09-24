import React from 'react';
import SearchBar from './searchBar';
import './searchBar.css'

class HomePage extends React.Component {
    constructor() {
        super();
this.state = {
    userId: null
};

    this.onLogout = this.onLogout.bind(this);
    this.openUserPage = this.openUserPage.bind(this);
    }
    
    componentDidMount() {
    if (!this.props.history.location.query) {
        this.props.history.replace('/login');
     } else {
        const userId = this.props.history.location.query.user;
         this.setState({userId})
     }
    }

    onLogout() {
        this.props.history.replace('/login');
    }

    openUserPage() {
        if (!this.props.history.location.query) {
            this.props.history.replace('/login');
         } else {
            const userId = this.props.history.location.query.user;
            this.props.history.push({pathname: 'userPage', query: {user: userId}});
         }
    }

    render() {
        return (
            <div className="home-page">
                <SearchBar userId={this.state.userId}/>
                <button className="userpage-button" onClick={this.openUserPage}>User Page</button>
                <button className="logout-button" onClick={this.onLogout}>logout</button>
            </div>
            );
        }
    }

export default HomePage;