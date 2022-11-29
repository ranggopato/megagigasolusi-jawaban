import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AddBook = (book) => {
  const router = useRouter();
  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("Token");
  }
  const [formData, setFormData] = useState({
    id: book.book.id,
    title: book.book.title,
    isbn: book.book.isbn,
    publisher: book.book.publisher,
    description: book.book.description,
    author: book.book.author,
  });
  const editbook = async (title, isbn, publisher, description, author) => {
    await fetch(`/api/books/?id=${book.book.id}`, {
      method: "PUT",
      body: JSON.stringify({
        author: author,
        title: title,
        isbn: isbn,
        publisher: publisher,
        description: description,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `${token}`,
      },

      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    await router.push("/");
  };
  const { title, isbn, publisher, description, author } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    editbook(title, isbn, publisher, description, author);

    console.log(book);
  };
  return (
    <div>
      <Navbar token={token} />
      <Sidebar />
      <div className="sm:pl-[5rem] lg:pl-[12rem] mt-20 w-full bg-white ">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Tambah Buku</h1>
          <label htmlFor="judul"> Judul</label>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="title"
            placeholder="Judul"
            value={title}
            onChange={onChange}
          />
          <label htmlFor="Isbn"> ISBN </label>
          <input
            type="isbn"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="isbn"
            placeholder="ISBN"
            value={isbn}
            onChange={onChange}
          />
          <label htmlFor="penerbit"> Pengarang</label>
          <input
            type="author"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="author"
            placeholder="Pengarang"
            value={author}
            onChange={onChange}
          />
          <label htmlFor="penerbit"> Penerbit</label>
          <input
            type="publisher"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="publisher"
            placeholder="Penerbit"
            value={publisher}
            onChange={onChange}
          />
          <label htmlFor="deskripsi"> Deskripsi</label>

          <textarea
            type="description"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="description"
            placeholder="Deskripsi"
            rows="5"
            value={description}
            onChange={onChange}
          ></textarea>
          <div className="flex justify-between px-[10rem]">
            <button
              type="submit"
              className=" text-center p-3 px-16 rounded bg-sky-700 text-white hover:bg-green-dark focus:outline-none my-1"
              onClick={onSubmit}
            >
              Simpan
            </button>
            <button
              type="submit"
              className=" text-center p-3 px-16 rounded bg-sky-700 text-white hover:bg-green-dark focus:outline-none my-1"
              // onClick={onSubmit}
            >
              Kembali
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
