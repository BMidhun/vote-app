import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Routes from './routes';


const App = (props) => {

   
return ( 
      <BrowserRouter>
            <Routes props={props} />
         </BrowserRouter>
    
  
  )
}


export default App;
