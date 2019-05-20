import React from 'react';
import { Grid } from 'styled-css-grid';
import { projects } from '../../data/projects';
import ProjectRowContainer from './ProjectRowContainer';

const ProjectsGrid = () => {
  return (
    <div>
      <Grid columns={12}>
        {projects
          .sort((a, b) => a.dueDate - b.dueDate)
          .map(project => (
            <ProjectRowContainer
              key={project.project}
              client={project.client}
              project={project.project}
              dueDate={project.dueDate}
              startDate={project.startDate}
            />
          ))}
      </Grid>
    </div>
  );
};

export default ProjectsGrid;
