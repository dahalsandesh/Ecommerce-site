import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ContactUs from "./Components/UserView/Contact";
import Home from "./Components/UserView/Home";
import LoginPage from "./Components/UserView/Signup/loginpage";
import CreateAccountPage from "./Components/UserView/Signup/createAccount";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<CreateAccountPage />} />
      </Routes>
    </Router>
  );
}

export default App;
