import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Navigate} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import Post from "./Pages/Post";
import { useState } from 'react';

function App() {

  const [login, setlogin] = useState(false);
  return (

    //basename = 'hey' // forcerRefresh
    <BrowserRouter>
      <div>
        <Header />
        <button onClick={
          ()=>setlogin(!login)}>
          {login?'Log out':'Log in'}
          </button>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />}>
            {login?<Profile/>:<Navigate to='/'/>}
          </Route>
          <Route path='/post/:id' element={<Post />} />
        </Routes>
      </div>

    </BrowserRouter>

  );
}

export default App;
