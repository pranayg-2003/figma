import Navbar from './components/Navbar';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      
    </>
  );
}

export default App;
