import React from 'react'
import Mixtiles from './mixtilesFrame/Mixtiles'
import MixtilesImage from './mixtilesFrame/MixtilesImage'
import FacebookLoginButton from './facebook/FacebookLoginButton1';
import FaceBookLogin2 from './facebook/FaceBookLogin2';
import Mixtiles3 from './mixtilesFrame/Mixtiles3';
import MixTiles4 from './mixtilesFrame/MixTiles4';
import MixTiles5 from './mixtilesFrame/MixTiles5';
import MixTiles6 from './mixtilesFrame/MixTiles6';
import Collage1 from './collage/Collage1';
import Layout1 from './layout/Layout1';
import Frame from './layout/Frame';
import FrameClipath from './layout/FrameClipath';

export default function App() {
  const handleLoginSuccess = (response) => {
    console.log('Logged in successfully:', response);
    // Add your logic here for what to do after successful login.
  };

  const handleLoginFailure = (response) => {
    console.log('Login failed:', response);
    // Add your logic here for what to do after login failure.
  };
  return (
    <div>
     {/* ************ Mixtiles ********* */}
    
     <MixTiles6/>
     <hr />
   
    {/* <Layout1/> */}

    {/* <Frame/> */}

    <FrameClipath/>

    </div>
  )
}
