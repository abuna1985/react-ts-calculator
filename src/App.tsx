import "./App.css";
import Calculator from "./components/calculator/calculator.component";

/**
 * The main application component that sets up the calculator UI.
 *
 * This component acts as the entry point for the application, rendering the
 * main structural container for the calculator and integrating the Calculator
 * component within it.
 */

function App() {
  return (
    <main className="calculator-container">
      <Calculator />
    </main>
  );
}

export default App;
