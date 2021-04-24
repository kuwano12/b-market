import React from 'react';
import './sign-in.styles.scss';
import Button from 'react-bootstrap/Button';
import { auth } from '../../firebase/firebase.utils';


class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
        console.log(this.state.email);
    }

    render() {
        return(
            <div>
                <h2>Connexion à l'espace Admin</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Mot de passe</label>
                        <input id="password" name="password" onChange={this.handleChange} />
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