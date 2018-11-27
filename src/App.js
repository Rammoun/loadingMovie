import React, { Component } from 'react';
import logo from './logo.svg';
import Movie from './Movie/Movie';
import Loading from './Loading/Loading';
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoading:true
    }
  }
  WithLoading = () => {
    console.log(this.state.isLoading)
    if (this.state.isLoading == true) return <Loading />;
    else return <Movie/>;
    
  }
componentDidMount(){
    this.setState({isLoading: false}, ()=>console.log(this.state.isLoading));
    }
  render() {
    
    return (
      <div className="App">        
        <this.WithLoading />
      </div>
    );
  }
}

export default App;
