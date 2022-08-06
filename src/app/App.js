import React from "react";
import LogInIndex from "../pages/LogIn/logInIndex";
import {Route,Routes} from "react-router-dom";
import UserRegistration from "../pages/UserRegistration";
import DashBoard from "../pages/DashBoard/dashBoard";
import ProductManage from "../pages/ProductManage/productManage";


function App() {
  return (
     /* <Routes>
          <Route exact path='/' element={ <LogInIndex/>}/>
      </Routes>*/
      <ProductManage/>
  );
}

export default App;
