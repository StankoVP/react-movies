import React from "react";
import { Movies } from "../component/Movies";
import { Preloader } from "../component/Preloader";
import { Search } from "../component/Search";

const API_KEY=process.env.REACT_APP_API_KEY;
//alert(API_KEY);

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            search: "",
            totalRecords: 0,
            isLoaded: false,
        };
    }

    componentDidMount() {
        let url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=Matrix`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    search: data.Search,
                    totalRecords: data.totalResults,
                    isLoaded: true,
                });
            }) //. then(() => {console.log(this.state)})
            .catch((error) => console.error(error));
    }

    handleSearchChange = (str, itemType = "all") => {
        // console.log(str);
        // console.log(itemType);
        // alert('pause');
        this.setState({ isLoaded: false });
        let itemTypeAdd = "";
        switch (itemType) {
            case "all":
                break;
            case "movie":
                itemTypeAdd = "&type=movie";
                break;
            case "series":
                itemTypeAdd = "&type=series";
                break;
            default:
                alert("Error in itemType in handleSearchChange");
                break;
        }
        // console.log(str);
        // console.log(itemType);
        // alert('pause2');
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=` + str + itemTypeAdd)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    search: data.Search,
                    totalRecords: data.totalResults,
                    isLoaded: true,
                });
            })
            .catch((error) => console.error(error));
        // console.log(this.state.search);
        // console.log(this.state.isLoaded);
        // alert("pause3");
    };

    render() {
        const { search, totalRecords, isLoaded } = this.state;
        // console.log(this.state.search);
        // console.log(this.state.isLoaded);
        // alert("render pause1");
        return (
            <main>
                <Search cb={this.handleSearchChange} />
                {isLoaded ? (
                    <Movies search={search} totalRecords={totalRecords} />
                ) : (
                    <Preloader />
                )}
            </main>
        );
    }
}

export { Main };
