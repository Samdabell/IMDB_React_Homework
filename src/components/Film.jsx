import React from 'react'

class Film extends React.Component {
  render() {
    return (
      <div className="film">
        <h3 className="filmTitle">{this.props.title}</h3>
        <h5 className="showtimes">Showtimes</h5>
      </div>
    );
  }
}

export default Film;