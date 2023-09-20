import React from 'react'
import {LoginSocialFacebook} from 'reactjs-social-login'
import {FacebookLoginButton} from 'react-social-login-buttons'
export default function FacebookLoginButton1() {
  return (
    <div>

      <LoginSocialFacebook
      appId='1250037985682717'
      onResolve={(response) => console.log("response",response.data)}
      onReject={(error) => console.log("error",error)}
      >
        <FacebookLoginButton/>
      </LoginSocialFacebook>
    </div>
  )
}
