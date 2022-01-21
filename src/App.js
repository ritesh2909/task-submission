import './App.css';
import Navbar from './components/Navbar';
import {Switch,Route} from 'react-router-dom';
import Userdata from './components/Userdata';


function App() {
  return (
    

          <Switch> 
            
              <Route exact path="/userdata" component={Navbar}/>
              <Route exact path="/data" component={Userdata}/>
         </Switch>
        
    
  );
}

export default App;
