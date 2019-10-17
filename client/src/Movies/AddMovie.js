import React from 'react';

class AddMovie extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return(
      <form onSubmit={addMovieHandler}>
        Movie: <input type="text" name="title" placeholder="Title"/>
        Director: <input type="text" name="director" placeholder="Director"/>
        Metascore: <input type="number" name="metascore" placeholder="Metascore"/>
        Cast: <input type="text" name="stars" placeholder="Cast" />
        <button type='submit'>
            Add Movie
        </button>
      </form>
    )
  }
}

export default AddMovie; 