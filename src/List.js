import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export default function List({ data }) {
  return (
    <div>
      <h1
        style={{
          display: "block",
          textAlign: "center",
          padding: 20,
        }}
      >
        DATALAR
      </h1>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",

          padding: 30,
        }}
      >
        {data.map((user, i) => {
          return (
            <div
              key={i}
              style={{
                display: "block",
                border: "0.3px solid black",
                boxShadow: "5px 5px 5px black",
                padding: 30,
                width: "33%",
              }}
            >
              <h2>
                <ul>
                  <li>
                    {user.name} {user.surname}
                  </li>
                </ul>
              </h2>
              <h2>
                <ul>
                  <li>{user.email} </li>
                </ul>
              </h2>
              <h2>
                <ul>
                  <li>{user.city} </li>
                </ul>
              </h2>
            </div>
          );
        })}
      </div>
      <Link to="/form">
        <Button
          color="secondary"
          size="m"
          style={{
            display: "block",
            width: 200,
            padding: 20,
            margin: "auto",
            textAlign: "center",
          }}
        >
          Form
        </Button>
      </Link>
    </div>
  );
}
