import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import styles from "../assets/styles/Home.module.css";
import Button from "react-bootstrap/Button";
import { getTopUsersAction } from "../actions/GitHubUser";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { topUsers } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("topUsers: ", topUsers);

  useEffect(() => {
    dispatch(getTopUsersAction(5));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className={styles.mainContainer}>
      <h1>Top 5 GitHub users</h1>
      <p>Tap the username to see more information</p>
      {topUsers.map((topUser, index) => (
        <Button
          key={`user-${index}`}
          className={styles.buttons}
          onClick={() => navigate(`/user/${topUser.login}`)}
          >
            {topUser.login}
        </Button>
      ))}
    </Container>
  );
};

export default Home;
