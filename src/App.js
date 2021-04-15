import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import ItemDetail from "./component/item-detail/item-detail.component";
import Homepage from './page/homepage/homepage.component';
import Header from './component/header/header.component';
import AdminPage from './page/admin/adminpage.component';

function App() {
  return (
    <div className="container">
        <Header />
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/admin' component={AdminPage} />
            <Route path='/:id' component={ItemDetail} />
        </Switch>
    </div>
  );
}

export default App;
