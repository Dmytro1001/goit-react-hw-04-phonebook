import styled from '@emotion/styled';
import {
  Form as FormicForm,
  Field as FormicField,
  ErrorMessage as FormicError,
} from 'formik';

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Form = styled(FormicForm)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 200px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
`;

export const Field = styled(FormicField)`
  height: 30px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 5px;
`;

export const SubmitBtn = styled.button`
  appearance: none;
  background-color: #ffffff;
  border: 1px solid gray;
  border-radius: 5px;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 1em;
  margin: 0;
  opacity: 1;
  outline: 0;
  padding: 15px;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-rendering: geometricprecision;
  transition: opacity 300ms cubic-bezier(0.694, 0, 0.335, 1),
    background-color 100ms cubic-bezier(0.694, 0, 0.335, 1),
    color 100ms cubic-bezier(0.694, 0, 0.335, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;

  &:before {
    animation: opacityFallbackOut 0.5s step-end forwards;
    backface-visibility: hidden;
    background-color: #ebebeb;
    clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: translateZ(0);
    transition: clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1),
      -webkit-clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    width: 100%;
  }

  &:hover:before {
    animation: opacityFallbackIn 0s step-start forwards;
    clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
  }

  &:after {
    background-color: #ffffff;
  }

  & .text {
    z-index: 1;
    position: relative;
  }
`;

export const ErrorMessage = styled(FormicError)`
  color: tomato;
  font-size: 12px;
`;
