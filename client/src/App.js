import React, {useEffect} from 'react';
import 'materialize-css'
import { useRoutes } from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { connect } from 'react-redux';
import { logoutUser, autoLogin } from './redux/actions/auth';
import { clearPageVoc } from './redux/actions/vocabulary';

function App(props) {
  
  const autoLoginEff = props.autoLogin
  useEffect(() => {
    autoLoginEff()
  }, [autoLoginEff])

  const routes = useRoutes(props.isAuthenticated)

  return (
    <Router>    
      <Navbar isAuthenticated= {props.isAuthenticated} logoutUser={props.logout} clearPage={props.clearPage}/>
      <div className="container">
        {routes}
      </div>
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  }
}
function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin()),
    logout: () => dispatch(logoutUser()),
    clearPage: () => dispatch(clearPageVoc()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
