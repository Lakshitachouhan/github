import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetchUserAsync } from "../features/auth/authSlice";
import Usercard from "./Usercard";

const Home = ({ changeTheme }) => {
  const [searchUser, setSearchUser] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchUserAsync(searchUser));
    setSearchUser("");
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <button
        onClick={changeTheme}
        className="absolute top-0 right-32 mt-4 mr-2 px-2 py-1 bg-slate-800 text-white-800 rounded-lg focus:outline-none focus:ring focus:border-blue-300">
        Change Theme
      </button>
      <div className="relative">
        <input
          type="text"
          value={searchUser}
          onChange={(e) => setSearchUser(e.target.value)}
          placeholder=" Search github username..."
          className=" px-10 py-4  w-96 rounded-lg border-r-0 focus:outline-none focus:ring focus:border-blue-300 bg-gray-800 text-white"
        />
        <div className="absolute left-1 top-5 text-gray-400">
          <FaSearch />
        </div>
        <button
          onClick={handleSearch}
          className="  absolute right-1 top-1 px-4 py-2 bg-blue-500 text-white rounded-lg  focus:outline-none focus:ring focus:border-blue-300">
          search
        </button>
      </div>
      <Usercard searchUser={searchUser} />
    </div>
  );
};

export default Home;
