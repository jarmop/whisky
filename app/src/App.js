import React from 'react';
import './App.css';
import allProducts from './data/alko';
import AlkoList from './AlkoList';
import {formatPrice, TODAY} from './library';

const defaultMinRelativePrice = 40;
let highestRelativePrice = 0;
const countryOptions = allProducts.reduce(
    (accumulator, product) => {
      if (product.relativePrice > highestRelativePrice) {
        highestRelativePrice = formatPrice(product.relativePrice);
      }
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
      minRelativePrice: defaultMinRelativePrice,
      maxRelativePrice: highestRelativePrice,
    };
  }

  setSelectedCountry(country) {
    this.setState({
      selectedCountry: country,
    });
  }

  setPriceRange(min, max) {
    this.setState({
      minRelativePrice: min,
      maxRelativePrice: max,
    });
  }

  render() {
    // let products = allProducts;
    let products = allProducts.filter(product =>
      product.country === this.state.selectedCountry && product.relativePrice > this.state.minRelativePrice && product.relativePrice < this.state.maxRelativePrice
    );

    products.sort((a, b) => {
      const sortOrder = {
        country: 'asc',
        relativePrice: 'asc',
      };

      // Sort new whiskies first
      if (a.timeAdded === TODAY || b.timeAdded === TODAY) {
        let value = (new Date(b.timeAdded)).getTime() - (new Date(a.timeAdded)).getTime();
        if (value !== 0) {
          return value;
        }
      }

      for (let order in sortOrder) {
        let valA = a[order];
        let valB = b[order];
        if (valA < valB) {
          return sortOrder[order] === 'asc' ? -1 : 1;
        } if (valA > valB) {
          return sortOrder[order] === 'asc' ? 1 : -1;
        }
      }
      return 0;
    });

    return (
        <div>
          <div className="filter-container">
            <select onChange={(event) => this.setSelectedCountry(
                event.target.value)} value={this.state.selectedCountry}>
              {countryOptions.map(country =>
                  <option key={country} value={country}>{country}</option>
              )}
            </select>
            <div className="filter">
              <label>Price range: </label>
              <input
                  className="priceRangeInput"
                  name="minprice"
                  type="number"
                  defaultValue={this.state.minRelativePrice}
                  onChange={event => this.setPriceRange(event.target.value, this.state.maxRelativePrice)}
              />
              {' - '}
              <input
                  className="priceRangeInput"
                  name="maxprice"
                  type="number"
                  defaultValue={this.state.maxRelativePrice}
                  onChange={event => this.setPriceRange(this.state.minRelativePrice, event.target.value)}
              />
            </div>
          </div>

          {' Products: ' + products.length}

          <AlkoList products={products}/>
        </div>
    );
  }
}

export default App;