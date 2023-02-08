import React, { Suspense , useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import Header from 'microfrontend/Header';
import Footer from 'microfrontend/Footer';
import HelloVueApp from './HelloVueApp';
// const Footer = React.lazy(() => 'microfrontend/Footer')

import "./index.scss";

const App = () => {

  return(
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <div>Name: mf_use</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
      <HelloVueApp />

{/* <VueApp/> */}
    {/* <Suspense fallback={'loading remote...'}> */}
      <Footer />
    {/* </Suspense> */}
  </div>
)};
ReactDOM.render(<App />, document.getElementById("app"));
