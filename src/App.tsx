import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LookBook from "./pages/LookBook";

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/bts/lookbook" component={LookBook} />
    </Router>
  );
};

export default App;
