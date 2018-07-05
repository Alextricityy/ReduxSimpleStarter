import React, {Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import Videolist from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY= " AIzaSyB8itqjlrnSUVBl3o6SI9NJbzZIuIYDO40 ";


//create a component producing html

class App extends Component {

  constructor(props){
    super(props);
    
    this.state = { 
      videos: [],
      selectedVideo: null
      };

    YTSearch({key: API_KEY, term: "surfboards"}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
      console.log(data);
    });

  }
  render(){
  return (
  <div>
    <SearchBar />
    <VideoDetail video={this.state.selectedVideo }/>
    <Videolist 
    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
    videos={ this.state.videos }/>
  </div>
  );
}
}

//take the component and manipulate into the dom

ReactDOM.render(<App />, document.querySelector(".container"));