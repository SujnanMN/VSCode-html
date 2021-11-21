import logo from './logo.svg';
import './App.css';
import ComponentA from './components/contexthook/ComponentA';
import React from 'react';


export const UserContext = React.createContext()
export const BatchContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'sujnan'} >
        <BatchContext.Provider value={'google'}>
          <ComponentA />
        </BatchContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
