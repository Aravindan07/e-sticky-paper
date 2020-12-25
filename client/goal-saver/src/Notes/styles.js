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
  width: 60%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

export const NotesDivWrap = styled.div`
  display: flex;
  align-items: center;
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
