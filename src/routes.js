import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./Components/Home"

const Routes = () => {
  return(
    <Router>
      <Header/>

      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>

      {/* <Footer/> */}
    </Router>
  );

}

export default Routes;