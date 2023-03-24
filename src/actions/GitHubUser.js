import axios from "axios";
import { setTopUsers } from "../reducers/users";

const githubApiToken = process.env.REACT_APP_GITHUB_API_TOKEN;

export const getTopUsersAction = (numbeOfUsers = 5) => {
  return async (dispatch) => {
    var topUsers = [];
    try {
      const topUsersRes = await axios.get(
        "https://api.github.com/search/users?q=type:user",
        {
          params: { per_page: numbeOfUsers },
          headers: { Authorization: `Bearer ${githubApiToken}`}
        }
      );
      topUsers = topUsersRes.data.items;
      dispatch(setTopUsers(topUsers));
    } catch (error) {
      console.log("getTopUsers error: ", error);
    }
  };
};
