import React,{useContext} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom'
import './App.css';



const theme = {
  
  light: {
    darkGreen: '#565d47',
    tan:'#b49c73', 
    pink: '#eaac9d', 
    lightTan:'#f0daa4'
  }
}

const ThemeContext = React.createContext(theme.light);

function App() {
  return (
    <div className="App">
        <ThemeContext.Provider value={theme.light}>
          <Header />
          <Container>

              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route>
                  <NoMatch />
                </Route>
              </Switch>
          </Container>
        </ThemeContext.Provider>
    </div>
  );
}

function Header(){
  const theme = useContext(ThemeContext);
  const h = useHistory();

  return   <Navbar style={{backgroundColor:theme.lightTan}}>
              <Navbar.Brand onClick={() => h.push('/')} style={{cursor:'pointer', color: theme.darkGreen, fontWeight:'bolder'}}>
                  MARYAM
              </Navbar.Brand>
              <Nav className='ml-auto' activeKey="/">
                <Nav.Item>
                  <Nav.Link onClick={()=> h.push('/') }>
                    <Button style={{backgroundColor:theme.pink, border:`1px solid ${theme.pink}`}}>Home</Button>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={()=> h.push('/about')}>
                  <Button style={{backgroundColor:theme.tan, border:`1px solid ${theme.tan}`}}>About</Button>
                  </Nav.Link>
                </Nav.Item>                
              </Nav>
</Navbar>
}
function Home () {
  const theme = useContext(ThemeContext);
  const welcomeStyles = {
    fontSize:'4em',
    letterSpacing:'.5em',
    color: theme.lightTan,
  }

  return <div>
    <Row>
      <Col className='mt-5' style={{backgroundColor: 'none'}}>
          <h3 className='' style={welcomeStyles}>
          <span style={{color:theme.pink, fontWeight:'bold'}}>W</span>ELCOME</h3> <hr />
      </Col>
    </Row>
  </div>
}
function About(){
  const theme = useContext(ThemeContext);
  const aboutStyles = {
    fontSize:'4em',
    letterSpacing:'.5em',
    color: theme.lightTan,
  }
return  <div>
        <Row>
      <Col className='mt-5' style={{backgroundColor: 'none'}}>
          <h3 className='' style={aboutStyles}> 
            <span style={{color:theme.tan, fontWeight:'bold'}}>A</span>BOUT
          </h3> <hr />
      </Col>
    </Row>
  </div>
}
function NoMatch(){
  return <div>
    <h3>No Match</h3>
    <h1>404</h1>
  </div>
}



export default App;
