import './App.css';
import React from 'react';
import PathfindingVisualizer from '/Users/peterhong/Desktop/pathfinding-visualizer-tool/src'; 
/* PathfindingVisualizer is the name of the variable that will be used to reference the default export from the module
being imported. The second part of the import statement above is the path to the module being imported */


function App() {
  return (
    <div className="App">
       <PathfindingVisualizer></PathfindingVisualizer>  
    </div>
  );
}

export default App;
