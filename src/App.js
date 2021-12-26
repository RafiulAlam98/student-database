import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
            <Switch>
              <Route  exact path='/'>
                <Login></Login>
              </Route>
              <Route path='/login'>
                <Login></Login>
              </Route>
              <Route path='/register'>
                <Register></Register>
              </Route>
            </Switch>
          </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
