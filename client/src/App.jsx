import React, { useState, useEffect, useRef } from 'react';
import NavBar from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/about';
import Services from './components/services/services';
import Clients from './components/clients/clients';
import Contact from './components/contact/contact';

import './App.css'

function App() {
  document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault(); // Evita el comportamiento predeterminado de navegación

        const targetId = this.getAttribute('href').substring(1); // Obtiene el ID del elemento objetivo

        const targetElement = document.getElementById(targetId); // Encuentra el elemento con el ID correspondiente

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' }); // Desplaza la página hacia el elemento objetivo de manera suave
        }
      });
    });
  });
  
  return (

    <div>
      <NavBar></NavBar>
      <Home ></Home>
      <About></About>
      <Services></Services>
      <Clients></Clients>
      <Contact></Contact>
    </div>



  )
}

export default App
