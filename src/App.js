import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import ItemDetail from "./component/item-detail/item-detail.component";
import Homepage from './homepage/homepage.component';

function App() {
  return (
    <div className="container">
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/:id' component={ItemDetail} />
        </Switch>
    </div>
  );
}

export default App;
