// ErrorBoundary.jsx
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Actualizează starea componentei, astfel încât următoarea renderizare să arate interfața de fallback
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Aici poți adăuga și logica de logare a erorilor
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Poți renderiza orice interfață de fallback
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
