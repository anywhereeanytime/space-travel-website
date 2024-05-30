import Header from "./Header";
import bgImage from "./assets/home/background-home-mobile.jpg";

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image for Small Screens */}
      <div
        className="absolute inset-0 sm:hidden bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <Header />
    </div>
  );
}

export default App;
