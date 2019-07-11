import React from 'react';
import { Grid } from 'styled-css-grid';
import styled from 'styled-components';
import ProjectRowElements from '../ProjectRowElements';
import useHover from '../../hooks/useHover';
import PropTypes from 'prop-types';

const StyledGridContainer = styled.div`
  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const ProjectGridContainer = ({
  client,
  project,
  dueDate,
  startDate,
  dispatch,
  index,
}) => {
  const [hoverRef, isHovered] = useHover();

  return (
    <StyledGridContainer ref={hoverRef}>
      <Grid columns={12} minRowHeight={'40px'}>
        <ProjectRowElements
          client={client}
          project={project}
          dueDate={dueDate}
          startDate={startDate}
          isHovered={isHovered}
          dispatch={dispatch}
          index={index}
        />
      </Grid>
    </StyledGridContainer>
  );
};

ProjectGridContainer.propTypes = {
  client: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  dueDate: PropTypes.instanceOf(Date).isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  dispatch: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectGridContainer;
