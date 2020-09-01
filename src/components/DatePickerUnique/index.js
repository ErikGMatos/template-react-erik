import React, { useState, useEffect } from 'react';

import { isBefore, parseISO, format } from 'date-fns';
import PropTypes from 'prop-types';

import DatePicker from '~/components/DatePicker';

import { ContainerDatePickerUnique, DateRange, Icon } from './styles';

const setDateOfStorage = (
  setStartDate,
  setEndDate,
  toggleSelectionComplete,
  start,
  end
) => {
  setStartDate(parseISO(start));
  setEndDate(parseISO(end));
  toggleSelectionComplete(true);
};

export default function DatePickerUnique({
  name,
  start: startDate,
  end: endDate,
  setStart: setStartDate,
  setEnd: setEndDate,
  valuesStorage,
  disabled,
  ...rest
}) {
  const [selectionComplete, toggleSelectionComplete] = useState(false);
  const [permissionStorage, setPermissionStorage] = useState(true);

  useEffect(() => {
    function loadStorage() {
      const [start, end] = valuesStorage;
      if (!startDate || !endDate) toggleSelectionComplete(false);
      if (start && end) {
        if (permissionStorage) {
          setPermissionStorage(false);
          setDateOfStorage(
            setStartDate,
            setEndDate,
            toggleSelectionComplete,
            start,
            end
          );
        }
      }
    }
    loadStorage();
  }, [
    endDate,
    permissionStorage,
    setEndDate,
    setStartDate,
    startDate,
    valuesStorage,
  ]);

  const handleDateChange = date => {
    if (!selectionComplete && !startDate) {
      setStartDate(date);
      return;
    }
    if (!selectionComplete && startDate && !endDate) {
      const before = isBefore(date, startDate);
      if (before) {
        setStartDate(date);
        setEndDate(undefined);
      } else {
        setEndDate(date);
        toggleSelectionComplete(true);
      }
      return;
    }
    if (selectionComplete && startDate && endDate) {
      setStartDate(date);
      setEndDate(undefined);
      toggleSelectionComplete(false);
    }
  };
  const sameDay = (d1, d2) => {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  };
  const handleSelect = date => {
    if (date.type === 'select') return;
    if (
      !selectionComplete &&
      startDate &&
      !endDate &&
      sameDay(date, startDate)
    ) {
      handleDateChange(date);
    }
  };

  return (
    <ContainerDatePickerUnique {...rest}>
      <DatePicker
        name={name}
        disabled={disabled}
        label="Selecione a data"
        shouldCloseOnSelect={false}
        selected={startDate}
        onChange={handleDateChange}
        onSelect={handleSelect}
        selectsEnd={Boolean(startDate)}
        startDate={startDate}
        endDate={endDate}
        {...rest}
      />
      <DateRange disabled={disabled}>
        {startDate ? format(startDate, 'dd/MM/yyyy') : 'data inicial'} -{' '}
        {endDate ? format(endDate, 'dd/MM/yyyy') : 'data final'}
        <Icon size={16} />
      </DateRange>
    </ContainerDatePickerUnique>
  );
}

DatePickerUnique.propTypes = {
  name: PropTypes.string.isRequired,
  start: PropTypes.instanceOf(Date),
  end: PropTypes.instanceOf(Date),
  setStart: PropTypes.func.isRequired,
  setEnd: PropTypes.func.isRequired,
  valuesStorage: PropTypes.oneOfType([PropTypes.array]),
  disabled: PropTypes.bool,
};

DatePickerUnique.defaultProps = {
  start: undefined,
  end: undefined,
  valuesStorage: '',
  disabled: false,
};
