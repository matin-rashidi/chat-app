import React, { useState, useEffect, useContext } from "react";

import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import axios from "axios";

// Context
import { authContext } from "../contexts/AuthContextProvider";

// Components
import Navbar from "./Navbar";

// Styles (Custom styles for caht engine)
import "../components/chatEngine.css";

const Chats = () => {
  const [loading, setloading] = useState(true);
  const user = useContext(authContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me/", {
        headers: {
          "Project-ID": "3917d4e0-e5f4-48d3-96c6-36bb8aeb8a29",
          "User-Name": user.email,
          "User-Secret": user.uid,
        },
      })
      .then(() => {
        setloading(false);
      })
      .catch(() => {
        let formData = new FormData();
        formData.append("email", user.email);
        formData.append("username", user.email);
        formData.append("secret", user.uid);
        getFile(user.photoURL).then((avatar) => {
          formData.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users/", formData, {
              headers: {
                "Private-Key": "06c990ec-fc8f-4991-8c07-7adfdf91f3b0",
              },
            })
            .then(() => setloading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, history]);

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  const logoutHandler = async () => {
    await auth.signOut();
    history.push("/");
  };

  if (!user || loading)
    return (
      <div className="w-sreen h-screen flex items-center justify-center flex-col gap-4">
        <div className="w-16 h-16 rounded-full border-8 border-violet-200 border-r-violet-800 animate-spin"></div>
        <p className="text-lg font-bold text-violet-800">loading...</p>
      </div>
    );

  return (
    <>
      <Navbar logoutHandler={logoutHandler} />
        <ChatEngine
          height="calc(100vh - 3.5rem)"
          projectID="3917d4e0-e5f4-48d3-96c6-36bb8aeb8a29"
          userName={user.email}
          userSecret={user.uid}
        />
    </>
  );
};

export default Chats;
