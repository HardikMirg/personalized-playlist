import React from "react";
import { REDIRECT_URI, CLIENT_ID } from "../../../environment";

import Navbar from './Navbar/Navbar';
import Hero from "./Hero/Hero";
import Docs from '../Docs/Docs'
import Alert from './../Alert/Alert';

export const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scopes=ugc-image-upload%20user-read-playback-state%20user-modify-playback-state%20user-follow-modify%20user-follow-read%20user-library-modify%20user-library-read%20streaming%20user-read-playback-position%20playlist-modify-private%20playlist-read-collaborative%20user-read-email%20playlist-read-private%20user-top-read%20playlist-modify-public%20user-read-currently-playing%20user-read-recently-played`;

export default function Login() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Docs/>
      <Alert class="redirecting" text="Redirecting..."/>
    </>
  );
}
