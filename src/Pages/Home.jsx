import React from "react";
import Nav from "../Components/Nav";
import TodoViewComponent from "../Components/DonarModule/TodoViewPage/TodoViewComponent";
import Footer from "../Components/Footer/Footer";
const Home = () => {
  return (
    <div className="TodoApp">
      <Nav />
      <TodoViewComponent />
      <Footer />
    </div>
  );
};

export default Home;
