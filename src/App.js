import "./App.css";
import { useState } from "react";
import FormDoc from "./FormDoc";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import List from "./List";

function App() {
  const datalar = [
    {
      id: 1,
      name: "paşa",
      surname: "ismihan",
      email: "pasaismihan0@gmail.com",
      city: "Zambia",
    },
    {
      id: 2,
      name: "aslı",
      surname: "Divarcı",
      email: "aslı@gmail.com",
      city: "Roma",
    },
    {
      id: 3,
      name: "taner",
      surname: "Aytaş",
      email: "aytastaner@gmail.com",
      city: "Fil Dişi Sahili",
    },
    {
      id: 4,
      name: "bertan",
      surname: "Söğütlü",
      email: "b.sogutlu@gmail.com",
      city: "Londra",
    },
    {
      id: 5,
      name: "hamdi",
      surname: "boyraz",
      email: "b.hamdi@gmail.com",
      city: "Zurich",
    },
  ];
  const [data, setData] = useState(datalar);

  const handleSubmit = (user) => {
    setData([...data, user]);
    console.log(data);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/list" element={<List data={data} />} />
        <Route path="/form" element={<FormDoc handleSubmit={handleSubmit} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
