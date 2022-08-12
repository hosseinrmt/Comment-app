import { NavLink, withRouter } from "react-router-dom";

const items = [
  { name: "Home", to: "/", exact: true },
  { name: "New Comment", to: "/new-comment" },
];

const Navigation = () => {
  return (
    <nav className="flex items-center mb-6 p-6 text-lg bg-neutral-100 border-b-2 border-slate-900 ">
      <ul className="flex">
        {items.map((item) => {
          return (
            <li key={item.to} className="mr-8">
              <NavLink
                to={item.to}
                activeClassName="active"
                exact={item.exact || false}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
