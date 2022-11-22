import React, {useContext} from "react";
import MainLayout from "./components/layout/MainLayout";




import Login from "./login/Login";
// import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import HeaderNav from "./components/layout/HeaderNav";

import AuthContext from "./store/auth-context";




const App = () => {
  const authCtx = useContext(AuthContext)

  console.log(authCtx.isLoggedIn)
  
  return (
    // <MainLayout />


    <React.Fragment>
      {/* <MainHeader /> */}
      <HeaderNav />
      <main>
        {!authCtx.isLoggedIn && <Login/>}
        {authCtx.isLoggedIn && <MainLayout />}        
      </main>
    </React.Fragment>


  );
};

export default App;
