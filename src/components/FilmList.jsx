import React from 'react'
import Film from './Film.jsx'

class FilmList extends React.Component {
  render() {

    let filmNodes = this.props.data.map((film) => {
      return (
        <Film title={film.title} key={film.id}>
        </Film>
      );
    });

    return (
      <div className="film-list">
        {filmNodes}
        <h5>See More Opening This Week</h5>
      </div>
    )
  }
}

export default FilmList;