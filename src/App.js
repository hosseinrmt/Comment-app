import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CommentApp from "./components/CommentApp";

const App = () => {
  return (
    <>
      <ToastContainer />
      <CommentApp />
    </>
  );
};

export default App;
