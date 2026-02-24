import NavBar from './components/layout/nav-bar';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="flex min-h-[calc(100vh-72px)] items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600">
          Portfolio 2026
        </h1>
      </main>
    </div>
  );
};

export default App;
