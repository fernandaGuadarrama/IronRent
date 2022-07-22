import { useState, useEffect } from "react";
import './App.css';
import { Button, Spinner, Image, Skeleton, Input } from '@chakra-ui/react'
import Card from "./components/Card.js";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Detalle from "./components/Detalle";
import ListaCasas from "./components/ListaCasas";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";


function App() {
  const [show, setShow ] = useState(true);
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [dataCp, SetDataCp] = useState([])

  useEffect(() => {
    console.log("GET DATOS")
    fetch("https://ironbnb-m3.herokuapp.com/apartments")
    .then((datos) => {
      datos.json()
      .then((casas) => {
        console.log(casas);
        setData(casas);
        SetDataCp(casas);
        setShow(false);
      })
    })
    .catch(console.log)
  }, []);

  const toggleShow = () => {
    setShow(!show);
    console.log("El valor de who es:", show)
  }

//función para controlar lo que sucede con el input

const actualizarInput = (e) => {
  console.log("..:Actualizando:...", e.target.value )
  setSearch(e.target.value)
}

useEffect(() => {
  console.log("se está actualizando");
  const dataFiltrada = dataCp.filter((casa) => {
    return casa.title.toLowerCase().includes(search.toLowerCase())
  })
  setData(dataFiltrada)
},[search]);


  return (
    <Router>
      <Navbar />
      <Input placeholder="Buscar propiedad..." value={search}  onChange= {actualizarInput}/>
      <Routes>
        <Route path= "/signin" element= {<SignIn/>}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/casas/:id" element={<Detalle />}/>
        <Route path="/" element={<ListaCasas data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
