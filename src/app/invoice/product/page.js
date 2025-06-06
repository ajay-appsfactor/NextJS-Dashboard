"use client";

import React from "react";
import Image from "next/image";

const products = [
  {
    "id": 1,
    "name": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "category": "men's clothing",
    "Status": "Delivered",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  },
  {
    "id": 2,
    "name": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "category": "men's clothing",
    "Status": "Delivered",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
  },
  {
    "id": 3,
    "name": "Mens Cotton Jacket",
    "price": 55.99,
    "category": "men's clothing",
    "Status": "Delivered",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
  },
  {
    "id": 4,
    "name": "Mens Casual Slim Fit",
    "price": 15.99,
    "category": "men's clothing",
    "Status": "Delivered",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
  },
  {
    "id": 5,
    "name": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "category": "jewelery",
    "Status": "Delivered",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
  },
  {
    "id": 6,
    "name": "Solid Gold Petite Micropave ",
    "price": 168,
    "category": "jewelery",
    "Status": "Delivered",
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
  },
  {
    "id": 7,
    "name": "White Gold Plated Princess",
    "price": 9.99,
    "category": "jewelery",
    "Status": "Delivered",
    "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
  },
  {
    "id": 8,
    "name": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 10.99,
    "category": "jewelery",
    "Status": "Delivered",
    "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
  },
  {
    "id": 9,
    "name": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "price": 64,
    "category": "electronics",
    "Status": "Delivered",
    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
  },
  {
    "id": 10,
    "name": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "price": 109,
    "category": "electronics",
    "Status": "Delivered",
    "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
  }
];

function ProductTable() {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full table-auto border border-gray-300 rounded-lg shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Image</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-t border-gray-200">
              <td className="p-3">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={16}
                  height={16}
                  className="w-16 h-16 object-contain rounded"
                />
              </td>
              <td className="p-3">{product.name.slice(0,10)}</td>
              <td className="p-3">${product.price}</td>
              <td className="p-3">{product.category}</td>
              <td className="p-3">{product.Status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
