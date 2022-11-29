import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import Table from "./Table";
import Link from "next/link";

const HomePage = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    if (localStorage.Token) {
      // if there is a token set axios headers for all requests
      setToken(localStorage.Token);
    }
  }, []);

  const onDelete = async (id, token) => {
    await fetch(`/api/books/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `${token}`,
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          setBooks(
            books.filter((book) => {
              return book.id !== id;
            })
          );
        }
      })
      .catch((error) => console.log(error));
  };
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

  return (
    <div>
      <Navbar token={token} />
      <Sidebar />
      {token ? (
        <div className="sm:pl-[5rem] lg:pl-[12rem] mt-20 w-full bg-white ">
          <Link
            href="/add-book"
            className="border bg-green-500 hover:bg-green-700 p-2 rounded-md "
          >
            Tambah
          </Link>

          <div className="divide-y-2 border mt-4">
            <Table onDelete={onDelete} token={token} />
          </div>
        </div>
      ) : (
        <div className="sm:pl-[5rem] lg:pl-[12rem] mt-20 w-full bg-white ">
          You are not Login
        </div>
      )}
    </div>
  );
};

export default HomePage;
