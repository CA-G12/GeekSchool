import { SignUpPage } from "./pages";
import { UserAuthProvider } from "./context/AuthContext";
import "./style.css";

const App = () => (
  <UserAuthProvider>
    <div className="App">
      <SignUpPage />
    </div>
  </UserAuthProvider>
);

export default App;
