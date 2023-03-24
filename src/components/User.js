import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import styles from "../assets/styles/Home.module.css";
import Image from "react-bootstrap/Image";
import { getUserDetailsAction } from "../actions/GitHubUser";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const User = () => {
  const { userInfo } = useSelector((state) => state.users);
  let { githubUser } = useParams();
  const dispatch = useDispatch();

  console.log("userInfo: ", userInfo);

  useEffect(() => {
    dispatch(getUserDetailsAction(githubUser));
  }, [githubUser, dispatch]);

  return (
    <Container className={styles.mainContainer}>
      <Image src={userInfo.avatar_url} roundedCircle width={75} />
      <p>{userInfo.name}</p>
      <p style={{ color: "gray" }}>{userInfo.location || ""}</p>
    </Container>
  );
};

export default User;
