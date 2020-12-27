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
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 1.5rem;
  max-height: 400px;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.8rem;
    /* border-radius: 10px; */
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar-thumb {
    background-color: orangered;
    outline: 1px solid orangered;
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
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const ButtonWrap = styled.div`
  display: block;
  margin: 1rem auto;
`;

export const NotesOrganizer = styled.div`
  width: 80%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

export const NotesDivWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0rem;
  svg {
    cursor: pointer;
    color: #ba181b;
    margin-left: 0.5rem;
    :hover {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
      transform: scale(1.1);
    }
  }
  .edit {
    svg {
      color: black;
    }
  }
`;
