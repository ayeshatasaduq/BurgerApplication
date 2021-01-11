
import Login from './component/Login'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SignUp from './component/SignUp'
import { Switch, Route, Link } from "react-router-dom";
import Example from './component/Example'

function App() {
    return (
        <div className="App">
           
            
            <div className="outer">
                <div className="inner">
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route path="/sign-in" component={Login} />
                        <Route path="/sign-up" component={SignUp} />
                        
                       
                    </Switch>
                   
                </div>
                <Route path="/App" component={Example} />
            </div>
         
        </div>
    );
}

export default App;
