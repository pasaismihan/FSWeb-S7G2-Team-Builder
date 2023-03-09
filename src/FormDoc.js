import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

export default function FormDoc({ handleSubmit }) {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    city: "",
  });

  const formSubmit = (e) => {
    e.preventDefault();
    handleSubmit(user);
  };

  const formCreateFunction = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  return (
    <div className="login-form p-3 border border-primary-subtle rounded shadow m-auto mt-3 w-25 ">
      <h2 className="text-primary text-center">Login Pasa's Form</h2>
      <br />
      <Form onSubmit={formSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            onChange={formCreateFunction}
          />
        </FormGroup>
        <FormGroup>
          <Label for="surname">Surname</Label>
          <Input
            type="text"
            id="surname"
            name="surname"
            onChange={formCreateFunction}
          />
        </FormGroup>
        <FormGroup>
          <Label for="user-email">E-mail</Label>
          <Input
            type="email"
            id="user-email"
            name="email"
            onChange={formCreateFunction}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect" sm={2}>
            City
          </Label>
          <Input
            id="exampleSelect"
            name="select"
            type="select"
            onChange={formCreateFunction}
          >
            <option>Select a City</option>
            <option>Newyork</option>
            <option>Lviv</option>
            <option>Prag</option>
            <option>Bratislava</option>
            <option>Napoli</option>
            <option>San-Petersburg</option>
            <option>Moskova</option>
            <option>Budapeste</option>
            <option>Krakow</option>
            <option>Amsterdam</option>
            <option>Brugge</option>
          </Input>
        </FormGroup>
        <br />
        <Button color="danger" outline size="lg">
          Submit
        </Button>
      </Form>
      <hr />
      <Link to="/list" color="success" size="m">
        Data List
      </Link>
    </div>
  );
}
