import React from 'react';
import Result from './Result'
import {ACCESS_KEY} from './static/config/credentials'
import './searchBar.css'

class searchBar extends React.Component {
    state = {
      query: "",
      data: [],
      filteredData: []
    };
  
    handleInputChange = event => {
      const query = event.target.value;
  
      this.setState(prevState => {
        const filteredData = prevState.data.result;
  
        return {
          query,
          filteredData
        };
      });
    };
  
    getData = (query) => {
        const Authorization = `Client-ID ${ACCESS_KEY}`
    fetch(`https://api.unsplash.com/search/photos/?query=${query}`,
    {
        headers: {
            'Accept-Version': 'v1',
            Authorization
        }
    })
        .then(response => response.json())
        .then(data => {
          this.setState({
            data,
            filteredData: data.result
          });
        });
    };
  
    handleSubmit = (e) => {
        e.preventDefault();
    if (this.state.query) {
      this.getData(this.state.query);
     }
    }
  
    render() {
      return (
        <div className="searchForm">
          <form onSubmit={this.handleSubmit}>
            <input
              className="search-input"
              placeholder="Search for..."
              value={this.state.query}
              onChange={this.handleInputChange}
            />
          </form>
          {this.state.data && <Result results={this.state.data.results} userId={this.props.userId} />}
        </div>
      );
    }
  }

  export default searchBar;