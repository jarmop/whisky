import React from 'react';
import './App.css';
import allProducts from './data/alko';
import AlkoList from './AlkoList';


const countryOptions = allProducts.reduce(
    (accumulator, product) => {
      if (!accumulator.includes(product.country)) {
        accumulator.push(product.country);
      }
      return accumulator;
    },
    []
);

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedCountry: 'Skotlanti',
    };
  }

  setSelectedCountry(country) {
    this.setState({
      selectedCountry: country,
    })
  }

  render() {
    let products = allProducts.filter(product => product.country === this.state.selectedCountry);
    products.sort((a, b) => {
      if (a.country === b.country) {
        return a.relativePrice - b.relativePrice;
      } else {
        return 0;
      }
    });

    return (
        <div>
          <div className={{display: 'flex'}}>
            <select onChange={(event) => this.setSelectedCountry(event.target.value)} value={this.state.selectedCountry}>
              {countryOptions.map(country =>
                  <option key={country} value={country}>{country}</option>
              )}
            </select>
            {' tuotteita: ' + products.length}
          </div>

          <AlkoList products={products}/>
        </div>
    );
  }
}

export default App;
