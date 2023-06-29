import Header from "../comp/header";
import Footer from "../comp/footer";
//import main from "../comp/main";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase/config";
import { Link } from "react-router-dom";
import Loading from "../comp/Loading";
import { sendEmailVerification } from "firebase/auth";
const Home = () => {
  const [user, loading, error] = useAuthState(auth);

  const sendAgain = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("Email verification sent!");
      // ...
    });
  }

  if(loading){
    return (
    <Loading/>
  )}
  if(user){
    if(!user.emailVerified){
      return(
        <>
        <Header/>
        <main>
          <form>
        <p id="media">
              {" "}
              Welcome: {user.displayName} <span>🧡</span>
            </p>

            <p id="media">Please verify your email to continue ✋ </p>
            <button
              onClick={() => {
                sendAgain()
              }}
              className="delete"
            >
              Send email
            </button>
            </form>
        </main>
        <Footer/>
        </>
      )
    }
    if(user.emailVerified){
      return(
        <>
        <Header />

          <main>
          <p>
              {" "}
              Welcome: {user.displayName} <span>🧡</span>
            </p>
          </main>

          <Footer />
          </>
      )
    }
  }
  if(!user){
    return(
      <>
      <Header/>
    {/*{user && <main><h1>welcome :{user.displayName}  in my website <span>🧡</span></h1></main>}*/}
    
        <main>
          <p className="pls">
            Please{" "}
            <Link style={{ fontSize: "30px" }} to="/signin">
              sign in
            </Link>{" "}
            to continue... 🧡
          </p>
        </main>
      
    <Footer/>
    </>
    )
  }}
export default Home;
