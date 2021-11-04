
import './App.css';
import jwt_decode from "jwt-decode";
import { Route,Switch,Redirect } from "react-router-dom";

import Signin from "./Auth";
import Layout from './Template/Layout';

function App() {

  const SignOut = () =>{
    console.log("Ini adalah Log Out");
  } 


  const IsAuth = localStorage.getItem("AuthToken");
  const decodeAuth = jwt_decode(IsAuth);
  console.log(decodeAuth);
  
  

  //JSX
  return (
    <Switch>
      <Route path="/Login" component={Signin} />
      <Route path="/LogOut" component={SignOut} />

      {(IsAuth) ? (
        <Layout />
      ) : (
        <Redirect to="/Login" />
      )}

    </Switch>
  );
}

export default App;
