import React from 'react';
import './App.css';
import { Navbar, Home, Book, Information } from './Components';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Book />
      <Information />
{/* 
Nav
Home
Book
Information
Rental
Discount
Why
Testimonials
FAQ
App
Contact
     */}
    </div>
  );
}

export default App;
