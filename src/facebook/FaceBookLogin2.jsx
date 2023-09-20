import React from 'react';
import FacebookLogin from 'react-facebook-login';

function FaceBookLogin2() {
    const responseFacebook = (response) => {
      // Handle the Facebook login response here
      console.log(response);
    };

    const getUserPhotos = async () => {
      const accessToken = 'EAARw5yYXpR0BO4ZA46lN8exeX8TGtubVZBZANTFfId9IDyyJYJMT8MuuZCMQ3PtBZCSFdTy2ApsNTzf8B3l08ZBPj6SLomzYmyPtZC3xTs1UvbZBZBOc8E7cfmDMYgDAchHn1YzJVft4F0cFYjgdJnA6qIwGTcCIJVShpbjTQ2Jh4nolI1rL8gg7GkDiIM5tEU1t9wKkMDN39dXxXRkJajpoZAQ9xnvaEZD'
      try {
        const response = await fetch(
          `https://graph.facebook.com/v13.0/me/photos?access_token=${accessToken}`
        );
    
        if (response.ok) {
          const data = await response.json();
          return data.data; // This will contain an array of user photos
        } else {
          console.error('Error fetching user photos:', response.statusText);
          return [];
        }
      } catch (error) {
        console.error('Error fetching user photos:', error);
        return [];
      }
    };
    
  
    return (<>
      <FacebookLogin
        appId="1250037985682717"
        autoLoad={false} // Set to true if you want to auto-login
        fields="name,email,picture" // Specify the fields you want to access
        callback={responseFacebook}
      />

      <button onClick={getUserPhotos}>Get Photos</button>
      </> );
  }
  
  export default FaceBookLogin2;
  