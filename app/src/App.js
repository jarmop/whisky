import React from 'react';
import './App.css';
import alko from './data/alko';

function getRelativePrice(product)
{
  return (40 / product.abv * product.price * (0.7 / product.size))
}

alko.sort((a, b) => {
  if (a.country === b.country) {
    return getRelativePrice(a) - getRelativePrice(b);
  } else {
    return 0;
  }
});

function App() {
  return (
      <table className="table">
        <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Price per 0.7 l of 40 %
          </th>
          <th>
            Abv

          </th>
          <th>
            Price
          </th>
          <th>
            Size
          </th>
          <th>
            Country
          </th>
          <th>
            Notes
          </th>
        </tr>
        </thead>
        <tbody>
        {alko.map(product =>
            <tr key={product.id}>
              <td>
                {product.name}
              </td>
              <td>
                {getRelativePrice(product).toFixed(2)} €
              </td>
              <td>
                {product.abv} %
              </td>
              <td>
                {product.price.toFixed(2)} €
              </td>
              <td>
                {product.size} l
              </td>
              <td>
                {product.country}
              </td>
              <td>
                {product.notes}
              </td>
            </tr>
        )}
        </tbody>
      </table>
  );
}

export default App;
