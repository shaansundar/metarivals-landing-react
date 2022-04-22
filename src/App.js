import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button";
import Page1 from "./pages/page1";
import Header from "./components/header";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import Page5 from "./pages/page5";
import Page6 from "./pages/page6";
import Page7 from "./pages/page7";
import Page8 from "./pages/page8";
import Page9 from "./pages/page9";
import Page10 from "./pages/page10";

function App() {
  return (
    <div className="flex scroll-smooth flex-col items-center justify-between w-screen overflow-x-hidden overflow-y-auto">
      <Header />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
      <Page9 />
      <Page10 />
    </div>
  );
}

export default App;
