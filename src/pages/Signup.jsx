import { useState } from "react";
import AuthLoader from "../components/AuthLoader";
import { GlobalStates } from "../context";

export default function Signup() {
  const { apiUrl } = GlobalStates();

  const [state, setState] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    cpassword: "",
  });

  const [loader, setLoader] = useState("hidden");

  const { name, email, number, password, cpassword } = state;

  const signUp = async () => {
    setLoader("flex");

    if (
      name == "" ||
      email == "" ||
      number == "" ||
      password == "" ||
      cpassword == ""
    )
      return alert("Some fields are missing");

    if (password != cpassword) return alert("Passwords are not matching");

    const res = await fetch(`${apiUrl}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name.trimEnd(),
        email: email.trimEnd(),
        number: number.trimEnd(),
        password: password.trimEnd(),
      }),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("authtoken", data.authtoken);
      location.href = "/";
    } else alert(data.message);
  };

  return (
    <div
      id="signup"
      className="pt-20 bg-gray-900 flex items-center justify-center flex-col min-h-screen"
    >
      <div
        className={`${loader} absolute top-40 items-center justify-center text-white`}
      >
        <AuthLoader />
        <span className="text-pink-500">Signing Up</span>
      </div>

      <label className=" text-white block mb-2 text-sm font-medium dark:text-white">
        Your Name
      </label>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <i className="fa-solid fa-user text-gray-500"></i>
        </div>
        <input
          name="name"
          value={state.name}
          onChange={(e) =>
            setState({ ...state, [e.target.name]: e.target.value })
          }
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your name"
        />
      </div>

      <label className=" text-white block mb-2 text-sm font-medium dark:text-white">
        Your Email
      </label>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <i className="fa-solid fa-envelope text-gray-500"></i>
        </div>
        <input
          name="email"
          value={state.email}
          onChange={(e) =>
            setState({ ...state, [e.target.name]: e.target.value })
          }
          type="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter email address"
        />
      </div>

      <label className=" text-white block mb-2 text-sm font-medium dark:text-white">
        Your Number
      </label>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <i className="fa-solid fa-phone text-gray-500"></i>
        </div>
        <input
          name="number"
          value={state.number}
          onChange={(e) =>
            setState({ ...state, [e.target.name]: e.target.value })
          }
          type="tel"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter phone number"
        />
      </div>

      <label className=" text-white block mb-2 text-sm font-medium dark:text-white">
        Set Password
      </label>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <i className="fa-solid fa-lock text-gray-500"></i>
        </div>
        <input
          name="password"
          value={state.password}
          onChange={(e) =>
            setState({ ...state, [e.target.name]: e.target.value })
          }
          type="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Set Your password"
        />
      </div>

      <label className=" text-white block mb-2 text-sm font-medium dark:text-white">
        Confirm Password
      </label>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <i className="fa-solid fa-lock text-gray-500"></i>
        </div>
        <input
          name="cpassword"
          value={state.cpassword}
          onChange={(e) =>
            setState({ ...state, [e.target.name]: e.target.value })
          }
          type="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Confirm your password"
        />
      </div>

      <button
        onClick={signUp}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Sign Up
      </button>
    </div>
  );
}
