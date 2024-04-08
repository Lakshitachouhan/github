import React, { useEffect } from "react";
import { FaEye, FaCodeBranch, FaStar } from "react-icons/fa";

import {
  fetchRepositoriesAsync,
  selectRepositories,
} from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
// import { fetchUserRepositories } from "../features/auth/authService";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AllRepositories = () => {
  const { repositories, user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRepositoriesAsync(!user ? "lakshitachouhan" : user.login));
  }, []);

  return (
    <div className="mt-8 bg-navy rounded-lg p-6">
      <Link to={"/"} className="text-xl font-semibold mb-4 text-white">Repositories</Link>
      <ul className="divide-y divide-gray-300">
        {repositories?.map((repo) => (
          <li key={repo.id} className="py-4">
            <div className="bg-blue-900 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline">
                  {repo.name}
                </a>
              </h3>
              <p className="text-gray-500 mb-2">{repo.description}</p>
              <div className="flex items-center">
                <div className="flex items-center mr-4">
                  <div className="bg-sky rounded-full h-6 w-6 flex items-center justify-center">
                    <FaEye className="text-white" />
                  </div>
                  <span className="ml-2">{repo.watchers_count}</span>
                </div>
                <div className="flex items-center mr-4">
                  <div className="bg-yellow rounded-full h-6 w-6 flex items-center justify-center">
                    <FaCodeBranch className="text-white" />
                  </div>
                  <span className="ml-2">{repo.forks_count}</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green rounded-full h-6 w-6 flex items-center justify-center">
                    <FaStar className="text-white" />
                  </div>
                  <span className="ml-2">{repo.stargazers_count}</span>
                </div>
                <div className="ml-auto">
                  <p className="text-gray-500">
                    Created: {new Date(repo.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}``
      </ul>
    </div>
  );
};

export default AllRepositories;
