import React, { Component } from 'react';
import axios from 'axios';
import ViewPosters from './ViewPosters';
import OnePoster from './OnePoster';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      movieTitle: '',
      language: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFindPosters = this.handleFindPosters.bind(this);
    this.handleSendEmail = this.handleSendEmail.bind(this);
  }

 
  handleChange(event){
    this.setState({ [event.target.name]: event.target.value},);
    console.log({[event.target.name]: event.target.value});
  }

  handleFindPosters(){
    axios
      .get('http://api.tvmaze.com/search/shows',{
        params: {
          q: this.state.movieTitle
        }
      })
      .then(response => response.data)
      .then(movies => {

        const updatedMovies = movies.filter( show => show.show.language =this.state.language);
        console.log(updatedMovies);
        this.setState({movies: updatedMovies});
        console.log(this.state.movies);
      });
      
  }
  handleSendEmail(posterURL){
    axios
      .post('/email', { email: this.state.email, url: posterURL})
      .then(response => console.log(response.data))
  }


  render() {
    return (
      <div className='container text-color-white'>
        {/* Section with the title of the application */}
        <img src="/images/roll.jpg" alt="movie tape" className="mainImage" />
        <h1 className="p-3 mb-2 white">TV Show Poster Finder</h1>
        <hr className="table-light" />

        <div className='  white-background padding-leftright'>
          {/* Section on the left */}
          <div className="col-md-4 d-inline-block zero-padding right-padding">
            <div className="form-group bg-light text-dark grey-area">
              <label
                className="padding"
                htmlFor="exampleFormControlTextarea1"
                name="box">Let's find a poster for your favorite TV Show</label>
            </div>
            <div className="form-group grey-box padding">
              <label htmlFor="exampleFormControlTextarea1">Enter TV Show title below</label>
              <textarea
                className="form-control"
                name="movieTitle"
                onChange={this.handleChange}
                defaultValue={this.state.movieTitle}
                rows="2">
              </textarea>

            </div>
            <div className="form-group grey-box padding">
              <label htmlFor="exampleFormControlTextarea1">Enter language </label>
              <textarea
                className="form-control"
                name="language"
                onChange={this.handleChange}
                defaultValue={this.state.language}
                rows="2">
              </textarea>
            </div>            

            <div className="bg-secondary p-2 w-100 d-block padding grey-area">
              <button
                type="button"
                className="btn btn-lg btn-block align-middle p-0 grey-button"
                onClick={this.handleFindPosters}>Find Posters
                </button>
            </div>
          </div>

          {/* section on the right */}

          <div className="col-md-8 d-inline-block align-top table-light selector-for-some-widget zero-padding">
            <div className="form-group bg-light text-dark  grey-area left-padding">View Poster
            </div>
            <ViewPosters
            movies={this.state.movies}
            handleSendEmail={this.handleSendEmail}
            handleChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
