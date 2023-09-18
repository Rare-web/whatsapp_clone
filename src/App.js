import "./App.css";
import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const clientID =
    "1045370450778-cj1ni91urfit75va90ertl24ureacmnj.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientID}>
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
