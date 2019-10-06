import React from 'react';
import './App.css';
import alko from './data/alko';

function App() {
  return (
      <table className="table">
        <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Price per litre if 40 %
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
        </tr>
        </thead>
        <tbody>
        {alko.map(product =>
            <tr key={product.id}>
              <td>
                {product.name}
              </td>
              <td>
                {(40 / product.abv * product.price * (1 / product.size)).toFixed(2)} €
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
            </tr>
        )}
        </tbody>
      </table>
  );
}

export default App;
