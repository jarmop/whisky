import React from 'react';
import './App.css';
import alko from './data/alko';
import AlkoList from './AlkoList';


alko.sort((a, b) => {
  if (a.country === b.country) {
    return a.relativePrice - b.relativePrice;
  } else {
    return 0;
  }
});

class App extends React.Component {
  render(){
    return (
        <AlkoList products={alko}/>
    );
  }
}

export default App;
