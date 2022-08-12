import HomePage from "./pages/HomePage";
import NewCommentPage from "./pages/NewComment";
import NotFound from "./pages/NotFound";

const routes = [
  { path: "/new-comment", component: NewCommentPage },
  { path: "/", component: HomePage, exact: true },
  { component: NotFound },
];

export default routes;
