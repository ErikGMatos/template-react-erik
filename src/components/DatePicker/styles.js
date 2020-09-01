import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;

  .react-datepicker-wrapper {
    position: absolute;
    z-index: 1;
    display: block;
    width: 100%;
    height: 30px;
    padding: 0;
    border: 0;

    .react-datepicker__input-container {
      position: relative;
      display: inline-block;
      width: 100%;
      height: 100%;

      [type='text'] {
        position: relative;
        z-index: 2;
        width: 100%;
        height: 100%;
        border: none;
        border-bottom: 1px solid #ecedf2;
        background: 0 0;
        color: #4d4c59;
        outline: 0;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 24px;

        &:disabled {
          cursor: not-allowed;
        }
      }
    }
  }

  .react-datepicker-popper {
    + div {
      svg {
        transform: translateY(-50%) rotate(-180deg);
      }
    }

    .react-datepicker__current-month,
    .react-datepicker-time__header,
    .react-datepicker-year-header {
      padding: 4px 0 12px;
      color: #4d4c59;
      font-weight: 600;
      font-size: 16px;
      font-family: Poppins, sans-serif;
      line-height: 1;
      text-transform: capitalize;
    }

    .react-datepicker__month-container {
      width: 220px;
      padding: 8px;
    }

    .react-datepicker {
      border: 1px solid #c5c6d0;
      border-bottom-color: #c5c6d0;
      background: #fff;
      color: #4d4c59;
      box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.5);
    }

    .react-datepicker__header {
      position: relative;
      padding-top: 0;
      border: none;
      border-radius: 0;
      background-color: #fff;
    }

    .react-datepicker__month {
      width: 100%;
      margin: 0;
      text-align: center;
    }

    .react-datepicker__day-name,
    .react-datepicker__day,
    .react-datepicker__time-name {
      width: 22px;
      height: 22px;
      color: #4d4c59;
      line-height: 22px;
    }

    .react-datepicker__week .react-datepicker__day {
      font-size: 1.2rem;

      &:hover {
        background-color: transparent;
        color: #43bccd;
      }
    }

    .react-datepicker__day--outside-month {
      color: #8b8c99;
    }

    .react-datepicker__week .react-datepicker__day--keyboard-selected,
    .react-datepicker__week .react-datepicker__month-text--keyboard-selected,
    .react-datepicker__week .react-datepicker__quarter-text--keyboard-selected {
      border-radius: 50%;
      background-color: #43bccd;
      color: #fff !important;

      &:hover {
        background-color: #43bccd;
        color: #fff;
      }
    }

    .react-datepicker__day-names .react-datepicker__day-name {
      color: #4d4c59;
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 25px;
      text-align: center;
      text-decoration: none;
      text-transform: uppercase;
    }

    .react-datepicker__navigation--previous {
      top: 14px;
      left: 10px;
      border-width: 0px 2px 2px 0px;
      border-right-color: #43bccd;
      border-bottom-color: #43bccd;
      transform: rotate(135deg);
    }

    .react-datepicker__navigation--next {
      top: 14px;
      right: 10px;
      border-width: 2px 0px 0px 2px;
      border-top-color: #43bccd;
      border-left-color: #43bccd;
      transform: rotate(135deg);
    }

    .react-datepicker__navigation {
      width: 8px;
      height: 8px;
    }

    .react-datepicker__day--selected,
    .react-datepicker__day--in-selecting-range,
    .react-datepicker__day--in-range,
    .react-datepicker__month-text--selected,
    .react-datepicker__month-text--in-selecting-range,
    .react-datepicker__month-text--in-range,
    .react-datepicker__quarter-text--selected,
    .react-datepicker__quarter-text--in-selecting-range,
    .react-datepicker__quarter-text--in-range {
      border-radius: 0;
      background-color: #ecf8fa;
      color: #8b8c99 !important;

      &:hover {
        background-color: #ecf8fa !important;
      }
    }

    .react-datepicker__day.react-datepicker__day--today {
      background-color: #fff !important;
      color: #4d4c59 !important;
    }

    .react-datepicker__day.react-datepicker__day--range-start,
    .react-datepicker__day.react-datepicker__day--range-end {
      border-radius: 50%;
      background-color: #43bccd !important;
      color: #fff !important;
      font-weight: 600;

      &:hover {
        background-color: #43bccd !important;
        color: #fff !important;
      }
    }

    .react-datepicker__day.react-datepicker__day--disabled {
      color: #8b8c99 !important;
      opacity: 0.3 !important;
      cursor: not-allowed;
    }

    &[data-placement^='bottom'] {
      z-index: 5;
      margin-top: 16px;
    }
  }
`;

export const DateRange = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0px 10px;
  padding-right: 25px;
  border-color: hsl(0, 0%, 80%);
  border-radius: 50px;
  background: #fff;
  color: #4d4c59;
  box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.1);
  font-weight: 500;
  font-size: 12px;

  svg {
    position: absolute;
    top: 50%;
    right: 5px;
    transition: all 0.4s ease-in-out;
    transform: translateY(-50%) rotate(0deg);

    ${({ disabled }) =>
      disabled &&
      css`
        path {
          fill: #c5c6d0;
        }
      `}
  }
  ${({ disabled }) =>
    disabled &&
    css`
      color: #c5c6d0;
    `}
`;

export const Label = styled.label`
  display: block;
  color: ${({ theme }) => theme.$color_gray_5};
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 28px;
  text-align: left;

  ${({ error }) =>
    error &&
    css`
      color: ${({ theme }) => theme.$color_gray_1};
    `}
`;
