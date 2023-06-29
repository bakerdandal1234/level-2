import Header from "../comp/header";
import Footer from "../comp/footer";
import Loading from "../comp/Loading";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import Moment from "react-moment";
import {  deleteUser } from "firebase/auth";

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (!user && !loading) {
      navigate("/");
    }

    if (user) {
      if (!user.emailVerified) {
        navigate("/");
      }
    }

    
  });

  if (loading) {
    return <Loading />;
  }


  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (user) {
    return (
      <>
        <Header />
        <main>
          <form>
          <h6>Email: {user.email}</h6>
          <h6>UserName: {user.displayName}</h6>

          <h6>
            Last Sign-in :{" "}
            <Moment fromNow date={user.metadata.lastSignInTime} />{" "}
          </h6>

          <h6>
            Account Created :{" "}
            <Moment fromNow date={user.metadata.creationTime} />
          </h6>
          <button onClick={() => {

            deleteUser(user).then(() => {
              // 
              console.log("User deleted.")
            }).catch((error) => {
              // An error ocurred
              console.log(error.message)
            });
          }} className="delete">Delete account</button>
          </form>

        </main>
        <Footer />
      </>
    );
  }
};

export default Profile;


// Firebase: Error (auth/requires-recent-login)
