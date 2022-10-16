import SignUpPage from "./pages/SignUp";
import { UserAuthProvider } from "./context/AuthContext";

const App = () => (
  <UserAuthProvider>
    <div className="App">
      <SignUpPage />
    </div>
  </UserAuthProvider>
);

export default App;
