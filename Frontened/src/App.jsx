import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20 text-center text-white bg-gray-800 min-h-screen">
        <h1 className="text-4xl font-bold mt-10">Simple Dark Navbar</h1>
        <p className="text-gray-400 mt-2">Built with React + Tailwind</p>
      </div>
    </>
  );
}

export default App;
