import React, { useReducer } from 'react';
import './App.css';
import ProjectsGrid from './components/ProjectsGrid';
import ProjectForm from './components/ProjectForm';
import { projects } from './data/projects';
import { reducer } from './reducer.js';

const App = () => {
  const [projectsState, dispatch] = useReducer(reducer, projects);

  return (
    <div className="App" data-testid="app">
      <ProjectsGrid projectsState={projectsState} dispatch={dispatch} />
      <ProjectForm dispatch={dispatch} />
    </div>
  );
};

export default App;
