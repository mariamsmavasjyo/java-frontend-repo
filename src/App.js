import React from "react";



import { BrowserRouter,Routes,Route} from 'react-router-dom';


import Examtable from "./ExampleTables/Examtable";
import Dashboard from "./ExampleDashboard/Drawer";

import Examplechart from "./Examplecharts/examplechart";
import ALoginForm from "./Auth/Login/Login";
import ASignForm from "./Auth/Signup/Signup";
import ExamInventory from "./ExampleInventory/Exampleinventory";
import Exammanufacture from "./ExampleManufacturing/Examplemanufacture";
import Ordermanagement from "./ExampleOrdermanagement/Exampleordermanagement";
import Procurement from "./ExampleProcurement/ExampleProcurement";









function App() {
  
  return (
    <div className='App'>
    
 <BrowserRouter>
 <Routes>
 
  <Route path='/' element={< Dashboard/>}></Route> 
  <Route path='/Examtable' element={<Examtable/>}></Route> 
  <Route path='/examplechart' element={<Examplechart/>}></Route> 
  <Route path='/exampleinventory' element={<ExamInventory/>}></Route> 
  <Route path='/Examplemanufacture' element={<Exammanufacture/>}></Route> 
  <Route path='/Exampleordermanagement' element={<Ordermanagement/>}></Route> 
  <Route path='/ExampleProcurement' element={<Procurement/>}></Route> 
  <Route path='/Login' element={< ALoginForm/>}></Route> 
  <Route path='/Signup' element={< ASignForm/>}></Route> 


  
 </Routes>
 </BrowserRouter>
 
 </div>
  );
}

export default App
