import React from "react";
import {Movie} from "../component/Movie";

class Movies extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search : props.search,
      totalRecords: props.totalRecords
    };
  }

  
  render() {
    const {search, totalRecords} = this.state;
    return <div className = "container movies">
      {(search && totalRecords) ? search.map((element) => { 
                                            return (<Movie
                                              key={element.imdbID}
                                              imgPath={element.Poster}
                                              title={element.Title}
                                              theType={element.Type}
                                              creationYear={element.Year}
                                            />)})
                                  : ("Noting is found...")
      }
    </div>

  }


}

export {Movies}