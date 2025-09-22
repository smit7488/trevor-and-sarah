import tsLogo from "./assets/trevor-and-sarah-logo-vertical.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <img
          src={tsLogo}
          className="logo trevorandsarah"
          alt="Trevor & Sarah logo"
        />
      </div>
      <p className="text-uppercase mt-5" style={{
  letterSpacing: "0.15em",
  }} >Coming Soon!</p>
    </>
  );
}

export default App;
