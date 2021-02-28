import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FunDemo from "./pages/FunDemo";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route path="/FunDemo" component={FunDemo}></Route>
      </Switch>
    </Router>
  );
}

export default App;
