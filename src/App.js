import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import PostList from "./components/PostList/PostList";
import PostContextProvider from "./postContext";

const App = () => {
  return (
    <>
      <PostContextProvider>
        <Navbar />
        <PostList />
        <Footer />
      </PostContextProvider>
    </>
  );
};

export default App;
