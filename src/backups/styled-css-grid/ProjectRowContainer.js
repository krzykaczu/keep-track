import React, { useState } from 'react';
import { Cell } from 'styled-css-grid';
import ProjectDetailsEditorControls from '../../components/ProjectDetailsEditorControls';
import ProgressBarWithProjectData from '../../components/ProgressBarWithProjectData';

const ProjectRowContainer = props => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseHover = () => {
    setIsHovering(toggleHoverState);
  };

  const toggleHoverState = isHovering => setIsHovering(!isHovering);

  const addZero = text => (text.length < 10 ? '0' + text : text);

  return (
    <>
      <Cell width={1}>
        <ProjectDetailsEditorControls isHovering={isHovering} />
      </Cell>
      <Cell width={2}>{props.client}</Cell>
      <Cell width={4}>{props.project}</Cell>
      <Cell width={2}>
        {addZero(props.dueDate.toLocaleDateString('pl-PL'))}
      </Cell>
      <Cell width={3}>
        <ProgressBarWithProjectData
          startDate={props.startDate}
          dueDate={props.dueDate}
        />
      </Cell>
    </>
  );
};

export default ProjectRowContainer;
