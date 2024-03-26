import ErrorBoundary from "./components/ErrorBoundary";
import LandingPage from "./components/LandingPage"; // Asigură
import "./index.css";
function App() {
  return (
    <div>
      <ErrorBoundary>
        <LandingPage />
      </ErrorBoundary>
    </div>
  );
}

export default App;
