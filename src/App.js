import React from "react";
import { Route, Switch } from "react-router-dom";

// ContextsProvider
import AuthContextProvider from "./contexts/AuthContextProvider";

// Components
import Login from "./components/Login";
import Chats from "./components/Chats";

const App = () => {
  return (
    <AuthContextProvider>
      <Switch>
        <Route path="/Chats" component={Chats}/>
        <Route path="/" component={Login}/>
      </Switch>
    </AuthContextProvider>    
  );
};

export default App;
