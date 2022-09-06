import {auth, provider} from '../firebase-config';
import {signInWithPopup} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = ({setIsAuth}) => {

    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then( (result) => {
            setIsAuth(true);
            localStorage.setItem('isAuth', true);
            navigate('/');
        });
    }

    return(
        <div className="loginPage">
            <p>Sign In With Google to Continue</p>
            <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}

export default Login;

/*

1. Finish Firebase configs

2. Import the auth, provider from Configs. Import signInWithPopup from firebase/auth.

3. Create a function that will activate the sign in popup which takes two arguments. First is the auth, second is the provider. This function is resposible for switching the isAuth value to true once signed in with google via popup as well as keeping sign in via local storage.

4. useNavigate from react-router-dom is used to navigate to another route. It can be used to navigate users back to the home page once signed in. First a variable is created called "navigate" and stores the function useNavigate. Now, when you called this newly declared variable with the route as it's argument, it will redirect the user.

5. A logout button can be created via importing the "signOut" function from firebase/auth and passing it the auth variable as an argument. This button will also clear local storage to not show users logged in even though it has been logged out. 

NOTE: You cannot use useNavigate outside the Router component. Must be on different components. Instead, use the window object to redirect users.

6. Now we need to store our information in Cloud Firestore
 */