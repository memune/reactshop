import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from './img/bg.png'
import data from './data'
import Detail from './component/Detail'
import Main from './component/Main'
import Cart from './component/Cart'

import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'


function App(){

  let [shoes, setShoes] = useState(data)
  let navigate = useNavigate()
  
  return (
    <div>

      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
          <Nav.Link onClick={()=>{ navigate('/detail')}}>Detail</Nav.Link>
        </Nav>
        </Container>
      </Navbar>


      <Routes>

        <Route path="/" element = {
          <Main shoes={shoes} setShoes={setShoes}/>
        }/>
        
        <Route path="/detail/:id" element={ 
          <Detail shoes={shoes}/> 
        }/>

        <Route path="*" element={ <div>없는 페이지입니다.</div>}></Route>

        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버 페이지</div>}/>
          <Route path="location" element={<div>장소 페이지</div>}/>
        </Route>

        <Route path="/cart" element={<Cart/>}>
        </Route>
      </Routes>

    </div>
  )
}

const About = ()=>{
  return (
    <>
      <div>Hello</div>
      <Outlet></Outlet>
    </>
    
  )
}


export default App;
