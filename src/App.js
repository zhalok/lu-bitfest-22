import logo from './logo.svg';
import './App.css';
import './components/Landing_page/Landing_page'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import LandingPage from './components/Landing_page/Landing_page';
import ClientSearchPage from  './components/ClinetSearhPage/ClientSearchPage'
import Login from './components/Login/Login'
import SignUp1 from './components/SignUp_1/SignUp_1';
import SignUpAsWorker from './components/SignUpAsWorker/SignUpAsWorker';
import UserProfile from './components/UserProfile/StudentProfile'
import TeacherProfile from './components/UserProfile/TeacherProfile';
import BusInventory from './components/Bus_inventory/BusInventory';

import { useState } from 'react';
import SignUpAsClient from './components/SignUpAsClient/SignUpAsClient';
import ClientSearchResult from './components/Client/ClientSearchResult/SearchResult';
import BusAllocation from './components/Optimal/BusAllocation/BusAllocation';
import EstimatedPassenger from './components/Optimal/EstimatedPassenger/EstimatedPassenger';
import ConsumerRequestPage from './components/ConsumerREquestPage/ConsumerRequestPAge';
import TransportDemand from './components/TransportDemand/TransportDemand';
import CreateRoute from './components/UserProfile/CreateRoute';

function App() {
  const [user,setUser]=useState("f@gmail.com")
  const [searchedLocation,setSearchedLocation]=useState("PaikPara, B.Baria")
  return (
    
    <div className="App">
      <div id="body">
      <Router>
        <Routes>
          
        <Route path="/" exact element={<LandingPage/>}/>
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/search" exact element={<ClientSearchPage/>}/>
        <Route path="/studentprofile" exact element={<UserProfile/>}/>
        <Route path="/teacherprofile" exact element={<TeacherProfile/>}/>
        <Route path="/signup1" exact element={<SignUp1/>}/>
        <Route path="/signup2" exact element={<SignUpAsWorker/>}/>
        <Route path="/signup3" exact element={<SignUpAsClient/>}/>
        <Route path="/businvetory" exact element={<BusInventory/>}/>
        <Route path="/busallocation" exact element={<BusAllocation/>}/>
        <Route path="/estimatedpassenger" exact element={<EstimatedPassenger/>}/>
        <Route path="/consumerrequest" exact element={<ConsumerRequestPage/>}/>
        <Route path="/transportdemand" exact element={<TransportDemand/>}/>
        <Route path="createroute" exact element={<CreateRoute/>}/>
      
        </Routes>
      </Router>
      </div>
    </div>

  );
}

export default App;
