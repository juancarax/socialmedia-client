import React from "react";
import Header from "./components/headers/header.component";
import client from "./apollo-provider";
import { GlobalStyle } from "./global.styles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import AuthRoute from "./utils/AuthRouter";

import SinglePost from "./components/single-post/single-post.component";
import { AuthProvider } from "./context/auth";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import HomePage from "./pages/HomePage/HomePage";
import UserProfile from "./components/user/user.component";

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <GlobalStyle />
        <Router>
          <Header />
          <Route exact path="/" component={HomePage} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={SignUp} />
          <Route exact path="/users/:username" component={UserProfile} />
          <Route exact path="/posts/:postId" component={SinglePost} />
        </Router>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
