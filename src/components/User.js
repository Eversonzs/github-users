import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import styles from "../assets/styles/Home.module.css";
import Button from "react-bootstrap/Button";
import { getTopUsersAction } from "../actions/GitHubUser";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const User = () => {
  let { githubUser } = useParams();

  console.log("githubUser: ", githubUser);

/*   useEffect(() => {
    dispatch(getTopUsersAction(5));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  return (
    <Container className={styles.mainContainer}>
      <h1>User Info </h1>
    </Container>
  );
};

export default User;
