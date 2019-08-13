import React from 'react';
import './App.css';
import {Typography} from "@material-ui/core";

import Lottery from './Lottery'
function App() {
  return (
    <div className="App">
      <Typography variant="h2" color={"primary"} gutterBottom>
        Test task
      </Typography>
      <Lottery />
    </div>
  );
}

export default App;
