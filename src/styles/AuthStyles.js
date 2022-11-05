import styled, { css } from "styled-components";

// login/register coponents style
export const AuthContainer = styled.div`
    width: 24%;
    padding: 1.9rem 8.2rem;
    text-align: center;
    background: #2a2b38;
    border-radius: 10px;

  /*Inputs*/
  .field {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    background-color: #1f2029;
    border-radius: 4px;
    padding: 0.5em 1em;
    height: 2rem;
  }

  .input-icon {
    height: 1em;
    width: 1em;
    fill: #ffeba7;
  }

  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: #d3d3d3;
  }

  /*Text*/
  .title {
    margin-bottom: 1rem;
    font-size: 1.5em;
    font-weight: 500;
    color: #f5f5f5;
  }

  /*Buttons*/
  .btn {
    margin: 1rem;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    font-size: 0.8em;
    text-transform: uppercase;
    padding: 0.6em 1.2em;
    background-color: #ffeba7;
    color: #5e6681;
    box-shadow: 0 8px 24px 0 rgb(255 235 167 / 20%);
    transition: all 0.3s ease-in-out;
  }

  .btn-link {
    color: #f5f5f5;
    display: block;
    font-size: 0.75em;
    transition: color 0.3s ease-out;
  }

  /*Hover & focus*/
  .field input:focus::placeholder {
    opacity: 0;
    transition: opacity 0.3s;
  }

  .btn:hover {
    background-color: #5e6681;
    color: #ffeba7;
    box-shadow: 0 8px 24px 0 rgb(16 39 112 / 20%);
  }

  .btn-link:hover {
    color: #ffeba7;
  }
`;

export const ContainCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3%;
`;
