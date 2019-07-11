import React from 'react';
import ProgressBar from '../ProgressBar';
import { today } from '../../data/projects';
import { statusThresholds } from '../../utils/statusThresholds';
import { differenceInCalendarDays } from 'date-fns';
import PropTypes from 'prop-types';

const ProgressBarWithProjectData = ({ startDate, dueDate }) => {
  const caulcuateRange = (startDate, today, dueDate) => {
    if (startDate <= dueDate && today <= dueDate) {
      return Math.floor(
        parseFloat(
          differenceInCalendarDays(today, startDate) /
            differenceInCalendarDays(dueDate, startDate)
        ) * 100
      );
    } else {
      throw new Error('False dates -> false range!');
    }
  };

  const setStatus = (today, dueDate) => {
    if (today <= dueDate) {
      const daysToDueDate = differenceInCalendarDays(dueDate, today);
      if (daysToDueDate <= statusThresholds.setAlert) {
        return 'alert';
      } else if (
        daysToDueDate > statusThresholds.setAlert &&
        daysToDueDate <= statusThresholds.setWarning
      ) {
        return 'warning';
      } else {
        return 'normal';
      }
    } else {
      throw new Error('False dates -> false status!');
    }
  };

  return (
    <ProgressBar
      range={caulcuateRange(startDate, today, dueDate)}
      status={setStatus(today, dueDate)}
    />
  );
};

ProgressBarWithProjectData.propTypes = {
  startDate: PropTypes.instanceOf(Date).isRequired,
  dueDate: PropTypes.instanceOf(Date).isRequired,
};

export default ProgressBarWithProjectData;
