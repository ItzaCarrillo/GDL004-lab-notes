import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Hello extends Component {
  render(){
    return(<h2>{this.props.title}</h2>)
  }
}

class Text extends Component{
  render(){

    const {
      arrayOfNumbers,
      multiply,
      objetWhitInfo,
      title
    } = this.props

    const mappedNumbers = arrayOfNumbers.map(this.props.multiply)

    return(
    <div>
      {title}
      {multiply}
      <p>{mappedNumbers.join(', ')}</p>
      <p>{objetWhitInfo.key}</p>
  
    </div>
    )
  }
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <Hello title='Hello from props'/>
            <Text 
              arrayOfNumbers = {[2, 3, 10]}
              objetWhitInfo={{key: 'First Value', key2: 'otherValue'}}
              multiply={(number) => number*4} 
              number={2} 
              text='Texto en string'
              title={<h1>Este es el titulo</h1>}/>
        </header>
      </div>
    );
  } 
}

export default App;
