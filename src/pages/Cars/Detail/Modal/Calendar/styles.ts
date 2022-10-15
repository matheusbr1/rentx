import styled from "styled-components";
import { pxToRem } from "../../../../../styles/utils/pxToRem";

export const CalendarWrapper = styled.div`
  .react-calendar { 
    width: ${pxToRem(378)};
    max-width: 100%;
    background-color: transparent;
    color: ${props => props.theme.colors.gray[600]};
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
    border: unset;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: ${pxToRem(20)};
    line-height: ${pxToRem(24)};
  }

  .react-calendar__navigation button {
    min-width: ${pxToRem(44)};
    background: none;
    margin-top: ${pxToRem(8)};

    font-family: 'Archivo';
    font-weight: 600;
    font-size: ${pxToRem(24)};
    line-height: ${pxToRem(30)};

    color: ${props => props.theme.colors.gray[600]};
  }

  .react-calendar__navigation button:disabled {
    background: transparent;
  }

  .react-calendar__month-view__days__day--weekend {
    color: ${props => props.theme.colors.gray[600]};
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: ${props => props.theme.colors.red[100]};
  }

  abbr[title] {
    text-decoration: none;
    font-family: 'Archivo';
    font-weight: 600;
    font-size: ${pxToRem(14)};
    line-height: ${pxToRem(16)};
    letter-spacing: 0.08em;
    color: ${props => props.theme.colors.gray[400]};
  }

  .react-calendar__tile:enabled:focus {
    background: ${props => props.theme.colors.red[100]};
    color: ${props => props.theme.colors.red.main};
  }
  
  .react-calendar__tile--now {
    background: ${props => props.theme.colors.red[700]};
    color: ${props => props.theme.colors.red.main};
  }

  button.react-calendar__tile {
    width: ${pxToRem(56)};
    height: ${pxToRem(56)};

    font-size: ${pxToRem(16)};
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: ${props => props.theme.colors.red[700]};
    color: ${props => props.theme.colors.red.main};
  }

  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: ${props => props.theme.colors.red[100]};
  }

  .react-calendar__tile--active {
    background: ${props => props.theme.colors.red.main};
    color: ${props => props.theme.colors.white.main};
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: ${props => props.theme.colors.red.main};
    color: ${props => props.theme.colors.white.main};
  }

  .react-calendar__tile--range {
    background: ${props => props.theme.colors.red[100]};
    color: ${props => props.theme.colors.red.main};
  }

  .react-calendar__tile--rangeStart,
  .react-calendar__tile--rangeEnd {
    background: ${props => props.theme.colors.red.main};
    color: ${props => props.theme.colors.white.main};
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: ${props => props.theme.colors.gray[400]};
  }
`