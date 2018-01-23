import React from 'react';
import Carousel from './Carousel';
import OnePoster from './OnePoster';

const ViewPosters = props =>
  (
    <div>
      { (props.movies.length>=1) ? (
        <OnePoster
        movies={props.movies}
        handleSendEmail={props.handleSendEmail}
        handleChange={props.handleChange}
        />
      ):(
        <Carousel/>
      )
      }
    </div>

  )

export default ViewPosters;