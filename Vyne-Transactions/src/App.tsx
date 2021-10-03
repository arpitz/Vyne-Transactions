import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import useStyles from "./styles";
import { Container } from "react-bootstrap";
import Transactions from "./components/Transactions/Transactions";

const App = () => {
  const classes = useStyles();

  return (
    <Container fluid className={classes.jumbotron}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Transactions} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
};

export default App;
