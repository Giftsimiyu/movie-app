import { useState } from "react";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Apipage from "./components/ApiPage";

import "./index.css";
import "./App.css";

function App() {
  return (
    <div className="bg-black">
      <div>
        <Navbar />
      </div>

      <div>
        <Apipage />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
