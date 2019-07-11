import React from 'react';
import { Cell } from 'styled-css-grid';
import styled from 'styled-components';
import ProgressBarWithProjectData from '../ProgressBarWithProjectData';
import Emoji from '../Emoji';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  all: 'unset';
  opacity: ${props => (props.isHovered ? '1' : '0')};
  cursor: pointer;
  border: none;
  transition: all 0.5s;
  will-change: opacity;
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
  background: none;
`;

const ProjectRowElements = ({
  isHovered,
  dispatch,
  index,
  client,
  project,
  startDate,
  dueDate,
}) => {
  const addZero = text => (text.length < 10 ? '0' + text : text);

  return (
    <>
      <Cell width={1} center middle>
        <StyledButton
          isHovered={isHovered}
          onClick={() => dispatch({ type: 'delete', index })}
          data-testid="completeButton"
        >
          <Emoji symbol="✔" label="complete" />
        </StyledButton>
      </Cell>
      <Cell width={2} center middle>
        <span data-testid="client">{client}</span>
      </Cell>
      <Cell width={4} center middle>
        <span data-testid="project">{project}</span>
      </Cell>
      <Cell width={2} center middle>
        <span data-testid="dueDate">
          {addZero(dueDate.toLocaleDateString('pl-PL'))}
        </span>
      </Cell>
      <Cell width={3} center middle>
        <ProgressBarWithProjectData startDate={startDate} dueDate={dueDate} />
      </Cell>
    </>
  );
};

ProjectRowElements.propTypes = {
  isHovered: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  client: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  dueDate: PropTypes.instanceOf(Date).isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
};

export default ProjectRowElements;
