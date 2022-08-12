import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Layout>
        <Switch>
          {routes.map((route, index) => (
            <Route {...route} key={index} />
          ))}
        </Switch>
      </Layout>
    </>
  );
};

export default App;
