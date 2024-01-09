import React from "react";

class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgPath : props.imgPath,
      title : props.title,
      theType : props.theType,
      creationYear : props.creationYear,
    }

  }

  render () {
    const {imgPath, title, theType, creationYear} = this.state;
    return (
       <div id={this.state.key} className="row">
         <div className="col s12 m6">
           <div className="card">
             <div className="card-image">
               <img src={imgPath} alt="Poster is unavailable" />
             </div>
             <div className="card-content">
               <div className="card-title">{title}</div>
               <span>{theType}</span>
               <span className="right">{creationYear}</span>
             </div>
           </div>
         </div>
       </div>
    );
  }
}

export {Movie}