// import axios from "axios";

// export const fetchUser = async (username) => {
//   try {
//     const response = await axios.get(`/users/${username}`);
//     console.log(response);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

import axios from "axios";
import { useEffect } from "react";

export const fetchUser = async (searchUser) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${searchUser}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

export const fetchUserRepositories = async (input) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${input}/repos`
    );
    // console.log(response.data);
    return response.data;
    // console.log(response.data);]
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

// fetchUserData();
