import React from 'react';
import './Catalog.css';
import allProductsJSON from 'data/alko.json';
import List from './List';
import { formatPrice, TODAY } from './library';
import { Product } from './types';

const allProducts: Product[] = allProductsJSON;

const defaultMinRelativePrice = 40;
let highestRelativePrice = 0;
const countryOptions = allProducts.reduce(
  (accumulator: string[], product) => {
    if (product.relativePrice > highestRelativePrice) {
      highestRelativePrice = product.relativePrice;
    }
    if (!accumulator.includes(product.country)) {
      accumulator.push(product.country);
    }
    return accumulator;
  },
  [],
);

type State = {
  selectedCountry: string,
  minRelativePrice: number,
  maxRelativePrice: number,
}

class Catalog extends React.Component {
  readonly state: State;

  constructor(props: any) {
    super(props);

    this.state = {
      selectedCountry: 'Skotlanti',
      minRelativePrice: defaultMinRelativePrice,
      maxRelativePrice: highestRelativePrice,
    };
  }

  setSelectedCountry(country: string) {
    this.setState({
      selectedCountry: country,
    });
  }

  setPriceRange(min: number, max: number) {
    this.setState({
      minRelativePrice: min,
      maxRelativePrice: max,
    });
  }

  render() {
    const { selectedCountry, minRelativePrice, maxRelativePrice } = this.state;
    const products = allProducts.filter((product) => product.country === selectedCountry
      && product.relativePrice > minRelativePrice
      && product.relativePrice < maxRelativePrice);

    products.sort((a: Product, b: Product) => {
      const sortOrder: { [key: string]: string } = {
        country: 'asc',
        relativePrice: 'asc',
      };

      // Sort new whiskies first
      if (a.timeAdded === TODAY || b.timeAdded === TODAY) {
        const value = (new Date(b.timeAdded)).getTime() - (new Date(a.timeAdded)).getTime();
        if (value !== 0) {
          return value;
        }
      }

      for (const orderKey of Object.keys(sortOrder)) {
        const valA = a[orderKey];
        const valB = b[orderKey];
        if (valA < valB) {
          return sortOrder[orderKey] === 'asc' ? -1 : 1;
        } if (valA > valB) {
          return sortOrder[orderKey] === 'asc' ? 1 : -1;
        }
      }
      return 0;
    });

    return (
      <div>
        <div className="filter-container">
          <select
            onChange={(event) => this.setSelectedCountry(
              event.target.value,
            )}
            value={selectedCountry}
          >
            {countryOptions.map(
              (country) => <option key={country} value={country}>{country}</option>,
            )}
          </select>
          <div className="filter">
            <label>Price range: </label>
            <input
              className="priceRangeInput"
              name="minprice"
              type="number"
              defaultValue={formatPrice(minRelativePrice)}
              onChange={
                (event) => this.setPriceRange(parseFloat(event.target.value), maxRelativePrice)
              }
            />
            {' - '}
            <input
              className="priceRangeInput"
              name="maxprice"
              type="number"
              defaultValue={formatPrice(maxRelativePrice)}
              onChange={
                (event) => this.setPriceRange(minRelativePrice, parseFloat(event.target.value))
              }
            />
          </div>
        </div>

        {` Products: ${products.length}`}

        <List products={products} />
      </div>
    );
  }
}

export default Catalog;
