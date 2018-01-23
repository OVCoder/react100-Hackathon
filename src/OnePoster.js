import React, {Component} from "react";

class OnePoster extends Component{
    constructor(props){
        super(props);
        this.state =  {
            movieTitle: '',
            language: ''
        }
        
    }

    render(){
        const { movies, handleSendEmail, handleChange} = this.props
        return(
            <div className="test">{movies.map((show,index) => 
              <div key={index}>
                <div className="wrapper">
                  <h4 className='gridBox a'>{show.show.name}</h4>
                  <p className="gridBox b"> Language: {show.show.language}</p>
                  <p className="gridBox c"> Premiered: <br/> {show.show.premiered} </p>
                  <img className='gridBox d' src={show.show.image.original} alt="selected poster" width="100" height="120"/>
                  <button className='gridBox e button-size'>
                    <a className='gridBox e' href={show.show.image.original} target="_blank">See poster</a>
                  </button>

                  <button className='gridBox g button-size'> 
                      <a className='gridBox g' href={show.show.url} target="_blank">Click here to see full info </a>
                  </button> 
                  <input className='gridBox h' type='text' placeholder='your@email.here' name='email' onChange={handleChange}/>
                  <button className='gridBox f button-size' onClick={()=> handleSendEmail(show.show.image.original)}>Email poster</button>
                </div>
                <hr className="horizontalLine"/>
              </div>
            )}
            </div>
        );
    }

}

export default OnePoster;