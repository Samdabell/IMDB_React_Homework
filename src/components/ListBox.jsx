import React from 'react'
import FilmList from './FilmList.jsx'

class ListBox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: [{
        id: 1,
        title: "Sausage Party",
      },
      {
        id: 2,
        title: "Cafe Society"
      },
      {
        id: 3,
        title: "Morgan"
      },
      {
        id: 4,
        title: "The 9th Life of Louis Drax"
      },
      {
        id: 5,
        title: "Naam Hai Akira"
      },
      {
        id: 6,
        title: "Equity"
      },
      {
        id: 7,
        title: "Things to Come"
      }]
    }
  }

  render(){
    return (
      <div className="list-box">
        <h2>UK Opening This Week</h2>
        <FilmList data={this.state.data} />
        <button>Get Showtimes</button>
      </div>  
    )
  }
}

export default ListBox;