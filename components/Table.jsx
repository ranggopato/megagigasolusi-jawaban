import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Table = ({ onDelete, token }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await fetch(
      "/api/books?" +
        new URLSearchParams({
          limit: 23,
          offset: 1,
        }),
      {
        method: "GET",

        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `${token}`,
        },
        credentials: "include",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.data);
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (id) => {
    onDelete(id, token);
    console.log(id);
  };

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              No
            </th>
            <th scope="col" className="py-3 px-6">
              Judul
            </th>
            <th scope="col" className="py-3 px-6">
              ISBN
            </th>
            <th scope="col" className="py-3 px-6">
              Penerbit
            </th>
            <th scope="col" className="py-3 px-6">
              Deskripsi
            </th>
            <th scope="col" className="py-3 px-6">
              Aksi
            </th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {book.id}
              </th>
              <td className="py-4 px-6">{book.title}</td>
              <td className="py-4 px-6">{book.isbn}</td>
              <td className="py-4 px-6">{book.publisher}</td>
              <td className="py-4 px-6">{book.description}</td>
              <td className="py-4 px-6 flex space-x-2">
                <Link
                  href={{
                    pathname: "/edit-book",
                    query: { object: JSON.stringify(book) },
                  }}
                  as={`/edit-book/${book.id}`}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </Link>
                <button
                  href="#"
                  className="font-medium text-red-400 dark:text-blue-500 hover:underline"
                  onClick={() => handleDelete(book.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
