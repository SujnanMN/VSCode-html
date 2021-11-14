/* import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Table from './components/Table';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';


function App() {
  return (
    <div className="App">
    <Form/>

      <h1 className={styles.success}>success</h1>
      <h1 className='error'>error</h1>

      <Inline/>
      <Stylesheet enabled={true} />
      <Table />
      <NameList />
      <UserGreeting />

      <ParentComponent />
      <EventBind />

    </div>
  );
}

export default App; */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListEmployeeComponent from './StudentMgmt/ListEmployeeComponent';
import HeaderComponent from './StudentMgmt/HeaderComponent';
import FooterComponent from './StudentMgmt/FooterComponent';
import CreateEmployeeComponent from './StudentMgmt/CreateEmployeeComponent';
import UpdateEmployeeComponent from './StudentMgmt/UpdateEmployeeComponent';
import ViewEmployeeComponent from './StudentMgmt/ViewEmployeeComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Routes> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Routes>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;