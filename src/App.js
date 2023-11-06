import React from 'react';
import './App.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
/* PathfindingVisualizer is the name of the variable that will be used to reference the default export from the module
being imported. The second part of the import statement above is the path to the module being imported. This import
statement above is necessary for me to create a PathfindingVisualizer component for this React program. */

function App() {
  return (
    <div className="App">
       <PathfindingVisualizer></PathfindingVisualizer>  
    </div>
  );
}

export default App;
