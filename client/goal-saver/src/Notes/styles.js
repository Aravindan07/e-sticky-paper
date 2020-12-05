import styled from "styled-components";

export const OuterWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
`;

export const NoteNameDiv = styled.div`
  color: #13262f;
  width: fit-content;
  display: flex;
  justify-content: center;
  margin: 2rem auto;
`;

export const NoteName = styled.div`
  display: block;
  text-align: center;
  margin: auto;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const UnderlineBorder = styled.div`
  height: 3px;
  width: 100%;
  background: #13262f;
  border-radius: 10px;
`;

export const TopButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 1.5rem;
  button {
    margin-right: 2rem;
  }
`;

export const TextArea = styled.textarea`
  width: 90%;
  margin: auto;
  display: block;
  height: 400px;
  background-color: #f9dc5c;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 5px;
  font-size: 1.2rem;
  font-weight: bold;
`;
