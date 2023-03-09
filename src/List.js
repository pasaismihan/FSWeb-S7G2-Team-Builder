import { Link } from "react-router-dom";
export default function List({ data }) {
  return (
    <div>
      {data.map((user, i) => {
        return (
          <div key={i}>
            <h1>{user.name}</h1>
            <h1>{user.surname}</h1>
            <h1>{user.email}</h1>
            <h1>{user.city}</h1>
          </div>
        );
      })}
      <Link to="/form" color="success" size="m">
        form
      </Link>
    </div>
  );
}
