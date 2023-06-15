import { BrowserRouter, Routes, Route} from "react-router-dom";
import AuthForm from "./Auth/AuthForm";
import UpdateProfile from "./pages/updateProfile";
import VerifyEmail from "./Auth/VerifyEmail";
import DailyExp from "./pages/DailyExp";

function App() {
  return (
    <BrowserRouter>
    <AuthForm />
      <Routes>
        <Route path="/signup"/>
        <Route exact path="/welcome" element={<VerifyEmail/>}/>
        <Route path="/profile" element={<UpdateProfile />}/>
        <Route path="/dailyexp" element={<DailyExp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;