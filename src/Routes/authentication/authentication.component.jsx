import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../Utils/firebase.utils"
import SignUpForm from "../../components/Sign-up/signup.component";
import SignInForm from "../../components/Sign-in/signin.component";

import './authentication.styles.scss'

const Authentication = () => {

    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication