import './App.css';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  const [txt, btnText] = useState('Enable dark mode');
  const  [alert, setAlert] = useState(null);

  const showalert=(message, type)=>{
    setAlert(
      {
      msg:message,
      type:type
      }
    )
    setTimeout(() =>{
      setAlert(null);
      },3000);
  }
  

  const chngeMode=()=>{
    if(txt==='Enable dark mode'){
      document.body.style.color='white'
      document.body.style.backgroundColor='Black'
      btnText('Enable Light Mode')
      showalert('Dark Mode has been enabled')
    }
    else{
      document.body.style.color='Black'
      document.body.style.backgroundColor='White'
      btnText('Enable Dark Mode','Success')
      showalert('Dark Mode has been disabled', 'Success')

    } 
  }
  

  return (
    <>
    
  <Router>
   <Navbar title="Muneeb"/>
    <Alert alert={alert}/>
      <div className="container my-5   ">
        <Routes>
            <Route exact path="/" element={<TextForm  heading="Enter Text to Analyze"  chngeMode={chngeMode} txtChnage={txt}/>}>
            </Route>
            <Route exact path="/about" element={<About  chngeMode={chngeMode}  chng={chngeMode}/>}>
            </Route>
        </Routes>
      </div> 
  </Router>    
       
        

    </>
  );
}

export default App;
