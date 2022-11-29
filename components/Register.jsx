import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    profileName: "",
    address: "",
  });
  const register = async (username, password, profileName, address) => {
    await fetch("/api/auth/do-register", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
        profileName: profileName,
        address: address,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    await router.push("/login");
  };

  const { username, password, profileName, address } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = () => {
    console.log(formData);
    register(
      formData.username,
      formData.password,
      formData.profileName,
      formData.address
    );
  };
  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Register</h1>
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

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="profileName"
              placeholder="profile Name"
              value={profileName}
              onChange={onChange}
            />
            <textarea
              className="
                form-control
                block
                w-full
                p-3
                mb-4
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
              rows="3"
              placeholder="Address"
              name="address"
              value={address}
              onChange={onChange}
            ></textarea>

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-sky-700 text-white hover:bg-green-dark focus:outline-none my-1"
              onClick={onSubmit}
            >
              Sign Up
            </button>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
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

export default Register;
