import { BrowserRouter as Router, Route,Redirect,Switch } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "Components/Header"
import Detail from "Routes/Detail";

const router = () => (
  <Router>
    <Header/>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tv" component={TV} />
        <Route exact path="/search" component={Search} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} />
        <Redirect from="*" to="/"></Redirect>
    </Switch>    
  </Router>
);

export default router;
