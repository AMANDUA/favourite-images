import React from 'react';
import Photo from './Photo'

class UserPage extends React.Component {
    state = {
        data: [],
        userId: null,
    }

    componentDidMount() {
    if (!this.props.history.location.query) {
        this.props.history.replace('/login');
     } else {
        const userId = this.props.history.location.query.user;
        const data = JSON.parse(localStorage.getItem(`user${userId}`)) || [];
        this.setState({data, userId});
     }
    }

    render() {
        return (
            <div>
            <h1>Your Favourites Collection</h1>
            
                {this.state.data && this.state.data.length > 0 ? (
          this.state.data.map((photo, key) => (
            <Photo photo={photo} key={`photo-${key}`} userId={this.state.userId}  favourites={this.state.data}/>
          ))
        ) : (
          <div>No Favourites!!!Add some!</div>
        )}
            </div>
            );
        }
    }

export default UserPage;