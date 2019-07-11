import React from 'react';
import ProjectGridContainer from '../ProjectGridContainer';
import { containerWidth } from '../../utils/style';
import PropTypes from 'prop-types';

const ProjectsGrid = ({ projectsState, dispatch }) => {
  return (
    <div style={{ width: `${containerWidth}%` }}>
      {projectsState
        .sort((a, b) => a.dueDate - b.dueDate)
        .map((singleProject, index) => {
          const { project, client, dueDate, startDate } = singleProject;
          return (
            <ProjectGridContainer
              key={project}
              client={client}
              project={project}
              dueDate={dueDate}
              startDate={startDate}
              dispatch={dispatch}
              index={index}
            />
          );
        })}
    </div>
  );
};

ProjectsGrid.propTypes = {
  projectsState: PropTypes.arrayOf(
    PropTypes.shape({
      client: PropTypes.string.isRequired,
      project: PropTypes.string.isRequired,
      dueDate: PropTypes.instanceOf(Date).isRequired,
      startDate: PropTypes.instanceOf(Date).isRequired,
    }).isRequired
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default ProjectsGrid;
