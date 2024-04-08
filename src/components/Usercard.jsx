// import React from "react";
// import download from "../assets/download.png";

// const Usercard = ({ darkTheme }) => {
//   return (
//     <>
//       <div
//         className={`flex items-center justify-center mt-8 ${
//           darkTheme ? "bg-white" : "bg-gray-800"
//         } w-96 mx-auto px-4 py-6 rounded-lg ${
//           darkTheme ? "text-black" : "text-white"
//         }`}>
//         <div className="mr-8">
//           <img src={download} className=" h-18  mb-12 rounded-full" />
//         </div>
//         <div>
//           <h2 className="text-xl font-bold">lakshita</h2>
//           <p className="text-gray-500">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eius
//             laborum laboriosam
//           </p>
//           <div
//             className={`bg-black rounded-lg pl-4 ${
//               darkTheme ? "text-black" : "text-white"
//             }`}>
//             <div className="flex items-center mt-2">
//               <div className="mr-4">
//                 <p className="font-semibold">respo</p>
//                 <p>20</p>
//               </div>
//               <div className="mr-4">
//                 <p className="font-semibold">followers</p>
//                 <p>890</p>
//               </div>
//               <div>
//                 <p className="font-semibold">Following</p>
//                 <p>900</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Usercard;

import React, { useEffect, useState } from "react";
// import download from "../assets/download.png";
import { FaMapMarkerAlt, FaTwitter, FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRepositoriesAsync, selectUser } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
// import { fetchUserAsync } from "../features/auth/authSlice";

const Usercard = ({ Usercard }) => {
  // const dispatch = useDispatch();
  const { user, isLoading, isError } = useSelector((state) => state.users);

  // const [username, setUsername] = useState("lakshita");

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchRepositoriesAsync(Usercard));
  // }, []);

  // const handleInputChange = (e) => {
  //   setUsername(e.target.value);
  // };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error occurred while fetching user data.</p>}
      {user && (
        <div
          className={`flex items-center justify-center mt-8 bg-slate-600
       } w-96 mx-auto px-4 py-6 rounded-lg `}>
          <div className="mr-8">
            <img
              src={user.avatar_url}
              className="h-18 mb-12 rounded-full"
              alt="Profile"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold">{user.login}</h2>
            <p className="text-gray-500">{user.bio}</p>
            <div className="bg-black rounded-lg pl-4">
              <div className="flex items-center mt-2">
                <div className="mr-4">
                  <p className="font-semibold">respo</p>
                  <p>{user.public_repos}</p>
                </div>
                <div className="mr-4">
                  <p className="font-semibold">followers</p>
                  <p>{user.followers}</p>
                </div>
                <div>
                  <p className="font-semibold">Following</p>
                  <p>{user.following}</p>
                </div>
              </div>
            </div>

            <div className="flex  mb-2 ">
              <div className="flex items-center mt-2">
                <FaMapMarkerAlt className="mr-2" />
                <p>{user.location}</p>
              </div>
              <div className="flex items-center mt-2  ml-1">
                <FaTwitter className="mr-2" />
                <p>{user.twitter_username}</p>
              </div>
            </div>

            <div className="flex  gap-3">
              <div className="flex items-center ">
                <FaGithub className="mr-2" />
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer">
                   Profile
                </a>
              </div>
              <div className="flex items-center   ">
                <Link to="/repositories" className="flex items-center">
                  <FaGithub className="mr-2" />
                  <p> Repos</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Usercard;
