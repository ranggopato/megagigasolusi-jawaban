import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const login = async (username, password) => {
    await fetch("/api/auth/do-login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        let token = data.data.token;
        localStorage.setItem("Token", token);
        console.log(data);
      });
    await router.push("/");
  };

  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    login(formData.username, formData.password);
  };

  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Login</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="username"
              placeholder="User Name"
              value={username}
              onChange={onChange}
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-sky-700 text-white hover:bg-green-dark focus:outline-none my-1"
              onClick={onSubmit}
            >
              Login
            </button>
          </div>

          <div className="text-grey-dark mt-6">
            New User ?
            <Link
              className="no-underline border-b border-blue text-blue"
              href="/login/"
            >
              Log in
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
