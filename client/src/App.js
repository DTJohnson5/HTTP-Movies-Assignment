import axios from "axios";
import React, { useState, useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import UpdateMovie from "./Movies/UpdateMovie";
import Movie from "./Movies/Movie";

const App = (props) => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  const setMovie = data => {
    setMovieList(data);
  };

  const updateMovie = movie => {
    axios
    .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
    .then(res => {
      fetchMovies();
      props.history.push('/');
    })
    .catch(error => {
      console.log(error.response);
    });
  };

  const fetchMovies = () => {
    axios
    .get("http://localhost:5000/api/movies")
      .then(res => {
        setMovieList(res.data);
      })
      .catch(err => alert(err.response));
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  const deleteMovie = id => {
    axios
      .delete(`http://localhost:5000/api/movies/${id}`)
      .then(res => {
        fetchMovies();
        props.history.push('/');
      })
      .catch(error => {
        alert(error)
      });
  };


  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" 
      render={props => {
        return (
          <MovieList
          {...props}
          setMovieList={setMovieList}
          movieList={movieList}
          />
        );
      }}
      />
      <Route
        path="/movies/:id"
        render={props => {
          return(
          <Movie {...props} addToSavedList={addToSavedList} deleteMovie={deleteMovie}/>
          );
        }}
      />
      <Route path='/update-move/:id' 
      render={props => {
        return(
          <UpdateMovie {...props} movieList={movieList} updateMovie={updateMovie}/>
        );
      }}
      />
    </>
  );
};

export default withRouter(App);