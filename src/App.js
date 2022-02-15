import React from 'react';
import Indexbody from './Components/Indexbody';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LogIn from './Components/LogIn';

function App() {
  return (
    <LogIn/>
    // <Router>
    //     <Routes>
    //       {/* <Route exact path="/" element={<Indexbody/>}/> */}
    //       <Route exact path="/" element={<LogIn/>}/>
    //       {/* <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
    //       <Route path="*" element={<NotFound/>}/> */}
    //     </Routes>
    // </Router>
  );
}

export default App;
