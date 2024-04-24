import logo from './logo.svg';
import './App.css';
import Create from './Components/Create/Create';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Read from './Components/Read/Read';
import Update from './Components/Update/Update';
import View from './Components/View/View';
import { Container, Header, List, Button, Icon, ButtonContent } from "semantic-ui-react";

function App() {


  return (
    <Container style={{ margin: 20 }}>
      <Router>

        <div className="">
          <h2 className="">Employee Application Form</h2>
         
          <Routes>

            <Route path='/' exact element={<Read />} />
            <Route path='/create' exact element={<Create />} />
            <Route path='/read' exact element={<Read />} />
            <Route path='/update' exact element={<Update />} />
            <Route path='/view' exact element={<View/>} />
          </Routes>

        </div>
      </Router>
    </Container>


  );
}

export default App;
