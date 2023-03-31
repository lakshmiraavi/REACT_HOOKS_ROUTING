import React, { Component } from 'react'
import Navbar from './root/layout/components/navbar/Navbar';
import {BrowserRouter as Router , Routes , Route }  from 'react-router-dom';
import Home from './root/layout/components/home/Home';
import About from './root/layout/components/about/About';
import EmployeeList from './employees/components/EmployeeList';
import StockList from './stocks/components/StockList';
import EmployeeDetails from  './employees/components/EmployeeDetails';
import StockDetails from './stocks/components/StockDetails';


let App =()=>{

  
      return (
         <React.Fragment>
           
           <Router>
           <Navbar/>
            <Routes>
               <Route exact path='/' Component={Home}></Route>
               <Route exact path='/employees' Component={EmployeeList}></Route>
               <Route exact path='/employees/:emp_id' Component={EmployeeDetails}></Route>
               
               <Route exact path='/stocks' Component={StockList}></Route>
               <Route exact path='/stocks/:stock_id' Component={StockDetails}></Route>
               <Route exact path='/about' Component={About}></Route>


            </Routes>
           </Router>
         </React.Fragment>
      )
   }
   

export default App