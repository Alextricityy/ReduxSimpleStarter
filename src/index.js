import React, {Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import Videolist from "./components/video_list"
const API_KEY= " AIzaSyB8itqjlrnSUVBl3o6SI9NJbzZIuIYDO40 ";


//create a component producing html

class App extends Component {

  constructor(props){
    super(props);
    this.state = { videos: []  };

    YTSearch({key: API_KEY, term: "surfboards"}), function(data) {
      this.setstate({ videos: data});
      console.log(data);
    });

  }
  render(){
  return (
  <div>
    <SearchBar />
    <Videolist videos={ this.state.videos }/>
  </div>
  );
}
}

//take the component and manipulate into the dom

ReactDOM.render(<App />, document.querySelector(".container"));