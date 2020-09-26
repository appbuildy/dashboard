import React from 'react';
import {Helmet} from "react-helmet";
import Dashboard from "./features/dashboard";

function App() {
  return (
    <div className="App">
        <Helmet>
            <meta charSet="utf-8" />
            <title>AppBuildy</title>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
        </Helmet>
      <Dashboard />
    </div>
  );
}

export default App;
