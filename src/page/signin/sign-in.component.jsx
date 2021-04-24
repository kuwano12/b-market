import React from 'react';
import './sign-in.styles.scss';
import Button from 'react-bootstrap/Button';


class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            login: '',
            password: ''
        }
    }

    render() {
        return(
            <div>
                <h2>Connexion à l'espace Admin</h2>
                <form >
                    <div>
                        <label for="login">Login</label>
                        <input id="login" name="login" />
                    </div>
                    <div>
                        <label for="password">Mot de passe</label>
                        <input id="password" name="password" />
                    </div>
                    <div>
                        <Button type="submit" variant="primary">Connexion</Button>

                    </div>
                </form>
            </div>
        );
    }
};

export default SignIn;