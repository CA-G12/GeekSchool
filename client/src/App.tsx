import { UserAuthProvider } from './context/AuthContext';

const App = () => (
  <UserAuthProvider>
  <div className='App'>hi</div>
</UserAuthProvider>
);

export default App;
