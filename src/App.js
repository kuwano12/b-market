import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import ItemDetail from "./component/item-detail/item-detail.component";
import Homepage from './page/homepage/homepage.component';
import Header from './component/header/header.component';
import AdminPage from './page/admin/adminpage.component';
import Signin from './page/signin/sign-in.component';
import { setCurrentUser } from './redux/user/user.actions';
import { auth } from './firebase/firebase.utils';
import { connect } from 'react-redux';

import { createUserProfilDocument } from './firebase/firebase.utils';

class App extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth) {
                const userRef = await createUserProfilDocument(userAuth);
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });
            }
            setCurrentUser(userAuth);
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render(){
        return (
          <div className="container">
              <Header />
              {
                  this.props.currentUser ? (
                    <Switch>
                        <Route exact path='/' component={Homepage} />
                        <Route exact path='/admin' component={AdminPage} />
                        <Route path='/:id' component={ItemDetail} />
                    </Switch>
                  ) : (
                    <Signin />
                  )
              }
              {/* <Switch>
                  <Route exact path='/' component={Homepage} />
                  <Route exact path='/admin' component={AdminPage} />
                  <Route exact path='/signin' render={() => 
                    this.props.currentUser ? (
                        <Redirect to="/" />
                    ) : (
                        <Signin />
                    )} 
                />
                  <Route path='/:id' component={ItemDetail} />
              </Switch> */}
          </div>
        );
    }
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
