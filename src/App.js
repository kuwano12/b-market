import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import ListItem from "./component/directory/list-item.component";

function App() {
  return (
    <div className="container">
        <Switch>
            <Route exact path='/' component={ListItem} />
        </Switch>
    </div>
  );
}

export default App;
