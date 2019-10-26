import React from 'react';
import {formatPrice} from './library';

let AlkoList = ({products}) => (
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
      {products.map(product =>
          <tr key={product.id}>
            <td>
              {product.name}
            </td>
            <td>
              {formatPrice(product.relativePrice)} €
            </td>
            <td>
              {product.abv} %
            </td>
            <td>
              {formatPrice(product.price)} €
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

export default AlkoList;