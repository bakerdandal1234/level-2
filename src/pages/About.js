import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import Main from "../comp/main";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase/config";
import Loading from "../comp/Loading";
const About = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if(!user && !loading){
      navigate("/")
    }
    if (user) {
      if (!user.emailVerified) {
        navigate("/");
      }
    }
  })
  if (loading) {
    return (
    <Loading/>
    );
  }


  if (user) {



    if (user.emailVerified) {
      return (
        <>
        <Header/>
          <main>
            <h1>if you don't give up,you will succeed</h1>
          </main>
        <Footer />
        </>
      );
    };
    }
    
  }
  

export default About;
