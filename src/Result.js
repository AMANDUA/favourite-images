import React from "react";

import Photo from "./Photo";

class Results extends React.Component {
  render() {
    const { results, userId } = this.props;
    const favourites = JSON.parse(localStorage.getItem(`user${userId}`)) || [];
    
    return (
      <div>
        <h3>Results</h3>
        {results && results.length > 0 ? (
          results.map((photo, key) => (
            <Photo photo={photo} key={`photo-${key}`} userId={this.props.userId}  favourites={favourites}/>
          ))
        ) : (
          <div>No results</div>
        )}
      </div>
    );
  }
}

export default Results;
