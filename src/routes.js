import FullComment from "./components/FullComment";
import HomePage from "./pages/HomePage";
import NewComment from "./pages/NewComment";
import NotFound from "./pages/NotFound";

const routes = [
  { path: "/comment/:id", component: FullComment },
  { path: "/new-comment", component: NewComment },
  { path: "/", component: HomePage, exact: true },
  { component: NotFound },
];

export default routes;
