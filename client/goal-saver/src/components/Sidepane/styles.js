import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 20%;
  position: fixed;
  background: #13262f;
  z-index: 2;
`;

export const SidePaneCloseDiv = styled.div`
  width: auto;
  height: auto;
  position: relative;
  svg {
    cursor: pointer;
    color: #ffffff;
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 10px 0px 10px;
  .menu {
    svg {
      width: 30px;
      height: 30px;
      color: #ffffff;
      cursor: pointer;
      margin-top: 5px;
    }
  }
`;

export const DropdownContent = styled.div`
  display: ${(props) => (props.isShow ? "block" : "none")};
  position: absolute;
  top: 35px;
  left: auto;
  right: 5px;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-flex;
`;

export const Content = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  :hover {
    background-color: #ddd;
  }
`;

export const NoGoalsWrapper = styled.div`
  width: 100%;
  text-align: center;
  height: ${(props) => (props.divType === "notes" ? "100%" : "75%")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  letter-spacing: 0.8px;
  color: ${(props) => (props.divType === "notes" ? "#011936" : "#ffffff")}; ;
`;

export const Desc = styled.p`
  color: #fff;
  font-size: 1.3rem;
  font-weight: bold;
`;

export const NotesWrapper = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IndividualNotes = styled.div`
  color: #000;
  font-weight: bold;
  font-size: 1.1.rem;
  width: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  text-align: left;
  margin: 0.5rem 0rem;
  background: #e5e5e5;
  padding: 0.5rem 0.5rem 0.5rem 0.2rem;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Organizer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-align: center;
`;

export const Organizer1 = styled.div`
  display: flex;
  svg {
    margin-right: 5px;
  }
`;
