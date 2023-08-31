import React, { useState } from "react";
import { useSelector } from "react-redux";
import UserPhoto from "../../assets/user.svg";
const Main = () => {
  const user = useSelector((state) => state.userState.user);
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };
  return (
    <Container>
      <ShareBox>
        <div>
          {user && user.photoURL ? (
            <img src={user.photoURL} alt="user Name photo" />
          ) : (
            <img src={UserPhoto} alt="user photo" />
          )}

          <button onClick={handleClick}>Start a post</button>
        </div>
      </ShareBox>
    </Container>
  );
};

export default Main;
