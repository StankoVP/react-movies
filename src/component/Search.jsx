import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            s: "",
            itemType: "all",
            type: "all",
            // handleSearchChange: props.cb,
        };
    }

    handleKey = (e) => {
        //console.log(e.key);
        if (e.key === "Enter") {
            //this.props.cb(this.state.s, this.state.itemType)
            this.props.cb(this.state.s, this.state.type);
        }
    };


    handleRadioChange2 = (e) => {

        this.setState(
            () => ({ [e.target.name]: e.target.value }),
            () => {
                this.props.cb(this.state.s, this.state.type);
            }
        );
    };

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col s12'>
                        <div className='input-field'>
                            <input
                                id='s'
                                placeholder="Search..."
                                className='validate'
                                type='text'
                                name='s'
                                value={this.state.s}
                                onChange={(e) => {
                                    this.setState({ s: e.target.value });
                                }}
                                onKeyDown={this.handleKey}
                            />
                            {/* <button className="btn go-button" onClick={()=>{this.props.cb(this.state.s, this.state.itemType)}}>Go</button> */}
                            <button
                                className='btn go-button'
                                onClick={() => {
                                    this.props.cb(
                                        this.state.s
                                      ,this.state.type
                                    );
                                }}
                            >
                                Go
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <p>
                        <label>
                            <input
                                className='with-gap'
                                name='type'
                                type='radio'
                                value='all'
                                checked={this.state.type === "all"}
                                onChange={this.handleRadioChange2}
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input
                                className='with-gap'
                                name='type'
                                type='radio'
                                value='movie'
                                checked={this.state.type === "movie"}
                                onChange={this.handleRadioChange2}
                            />
                            <span>Movies only</span>
                        </label>
                        <label>
                            <input
                                className='with-gap'
                                name='type'
                                type='radio'
                                value='series'
                                checked={this.state.type === "series"}
                                onChange={this.handleRadioChange2}
                            />
                            <span>Series only</span>
                        </label>
                    </p>
                </div>
            </div>
        );
    }
}

export { Search };
