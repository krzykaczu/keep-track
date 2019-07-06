import React, { useState } from 'react';
import { Grid, Cell } from 'styled-css-grid';
import Emoji from './Emoji';
import DatePicker from 'react-datepicker';
import ClientPicker from './ClientPicker';
import ProjectInput from './ProjectInput';
import MyButton from './MyButton';
import 'react-datepicker/dist/react-datepicker.css';
import { today } from '../data/projects';
import { eachDay } from 'date-fns';
import { containerWidth } from '../utils/style';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

const ProjectForm = ({ dispatch }) => {
  const [client, setClient] = useState('');
  const [project, setProject] = useState('');
  const [startDate, setStartDate] = useState({ startDate: today });
  const [dueDate, setDueDate] = useState({
    dueDate: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 30
    ),
  });

  const handleStartDateChange = date => {
    setStartDate({ startDate: date });
  };
  const handleDueDateChange = date => {
    setDueDate({ dueDate: date });
  };
  const handleClientChange = e => {
    setClient({ client: e.target.value });
  };
  const handleProjectChange = e => {
    setProject({ project: e.target.value });
  };

  const allSet =
    client.client !== undefined &&
    client.client !== 'select a client' &&
    project.project !== undefined &&
    project.project !== '' &&
    startDate.startDate !== undefined &&
    dueDate.dueDate !== undefined
      ? true
      : false;

  const handleSubmit = e => {
    e.preventDefault();

    if (allSet) {
      dispatch({
        type: 'add',
        client: client.client,
        project: project.project,
        startDate: startDate.startDate,
        dueDate: dueDate.dueDate,
      });
    }
  };

  return (
    <div style={{ width: `${containerWidth}%`, marginTop: '10vh' }}>
      <form onSubmit={handleSubmit} data-testid="projectForm">
        <Grid columns={11} minRowHeight={'30px'} alignContent="center">
          <Cell width={2}>
            <ClientPicker name="client" onChange={handleClientChange} />
          </Cell>
          <Cell width={4}>
            <ProjectInput
              placeholder={'Description of a project'}
              name="project"
              onChange={handleProjectChange}
            />
          </Cell>
          <Cell width={2}>
            {/* eslint-disable-next-line */}
            <span
              data-tip
              data-for="start date"
              data-event="mouseenter mouseleave"
            >
              <DatePicker
                selected={startDate.startDate}
                onChange={handleStartDateChange}
                showYearDropdown
                dateFormatCalendar="MMMM"
                dateFormat="dd.MM.yyyy"
                startDate={startDate.startDate}
                scrollableYearDropdown
                yearDropdownItemNumber={15}
                includeDates={eachDay(
                  new Date(
                    today.getFullYear(),
                    today.getMonth(),
                    today.getDate() - 30
                  ),
                  today
                )}
                name="startDate"
                className="DatePicker"
              />
            </span>
            <ReactTooltip
              id="start date"
              place="bottom"
              type="info"
              effect="solid"
              globalEventOff="click"
            >
              <span>Enter start date of the project</span>
            </ReactTooltip>
          </Cell>

          <Cell width={2}>
            {/* eslint-disable-next-line */}
            <span
              data-tip
              data-for="due date"
              data-event="mouseenter mouseleave"
            >
              <DatePicker
                selected={dueDate.dueDate}
                onChange={handleDueDateChange}
                showYearDropdown
                dateFormatCalendar="MMMM"
                dateFormat="dd.MM.yyyy"
                endDate={dueDate.dueDate}
                scrollableYearDropdown
                yearDropdownItemNumber={15}
                includeDates={eachDay(
                  today,
                  new Date(
                    today.getFullYear(),
                    today.getMonth(),
                    today.getDate() + 100
                  )
                )}
                name="dueDate"
                className="DatePicker"
              />
            </span>
            <ReactTooltip
              id="due date"
              place="bottom"
              type="info"
              effect="solid"
              globalEventOff="click"
            >
              <span>Enter due date of the project</span>
            </ReactTooltip>
          </Cell>
          <Cell width={1}>
            {/* eslint-disable-next-line */}
            <a data-tip data-for="submit button">
              <MyButton
                type="submit"
                disabled={!allSet}
                data-testid="addButton"
              >
                <Emoji symbol="➕" label="add" />
              </MyButton>
            </a>
            {!allSet && (
              <ReactTooltip
                id="submit button"
                place="bottom"
                type="error"
                effect="solid"
              >
                <span>Fill in all the fields!</span>
              </ReactTooltip>
            )}
          </Cell>
        </Grid>
      </form>
    </div>
  );
};

ProjectForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default ProjectForm;
