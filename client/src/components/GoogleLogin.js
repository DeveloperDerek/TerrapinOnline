import React from 'react';
import GoogleLogin from 'react-google-login';
import { login } from "../utils/GoogleAuth";

export default (props) => {
    const {toggle} = props;

    const success = (res) => {
        try{
            login(res.tokenId);
            toggle();
            // window.location.reload(false);
        } catch (e) {
            console.log(e)
        }
    };

    const failed = () => {
        console.log("failed")
    }

    return (
        <div>
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Login with Google"
                redirectUri="postmessage"
                onSuccess={success}
                onFailure={failed}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
};