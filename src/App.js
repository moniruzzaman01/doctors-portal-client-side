import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";
import auth from "./firebase.init";
import About from "./Pages/About/About";
import Appoinment from "./Pages/Appoinment/Appoinment";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Main/Home";
import Login from "./Pages/Login/Login";
import NotVerified from "./Pages/NotVerified/NotVerified";
import Review from "./Pages/Review/Review";
import Navbar from "./Pages/Shared/Navbar";
import Signup from "./Pages/Signup/Signup";
import RequireAuth from "./RequireAuth/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [user] = useAuthState(auth);
  if (user?.emailVerified === false) {
    return <NotVerified />;
  } else {
    return (
      <div className=" max-w-7xl mx-auto ">
        <Navbar />
        <div className=" pt-16">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route
              path="/appoinment"
              element={
                <RequireAuth>
                  <Appoinment />
                </RequireAuth>
              }
            ></Route>
            <Route path="/review" element={<Review />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
          <ToastContainer />
        </div>
      </div>
    );
  }
}

export default App;
