import React from "react";

class SearchBar extends React.Component {
  
constructor(props){
  super(props);
  this.state= {term: ""};
}

render(){
  return <input onChange={this.onInputChange} />;
}

onInputChange(event) {
console.log(event);
}
};

export default SearchBar;