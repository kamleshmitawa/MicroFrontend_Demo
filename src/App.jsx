import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
const Header = lazy(()=> import('./Header.jsx'))

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Suspense fallback={'loading host...'}>
    <div><Header /></div>
    <div>Name: microfrontend</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    </Suspense>
    <div><Footer /></div>

  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
