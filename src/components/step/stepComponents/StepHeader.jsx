import styled, { css } from "styled-components/macro";
//reconfig to try to text grid vs flex

const Container = styled.div`
  border: solid 1px yellow;
  display: grid;
  /* display: ${(props) => (props.flex ? "flex" : "grid")}; */
  color: var(--bs-white);
  /* grid-template-columns: ${(props) =>
    props.flex ? "" : " 1fr minmax(40px, auto) 1fr"}; */
  grid-template-columns: 1fr minmax(40px, auto) 1fr;
  grid-template-areas: "left main right";
  margin-bottom: 32px;

  ${(props) =>
    props.$flex &&
    css`
      display: flex;
    `}
`;

const StyledLeft = styled.div`
  grid-area: left;
  justify-self: start;
`;
const StyledCenter = styled.div`
  grid-area: main;
  justify-self: center;
  /* display: flex;
  flex-direction: column; */
`;
const StyledRight = styled.div`
  grid-area: right;
  justify-self: end;
  align-items: flex-start;
  /* display: flex; */
  column-gap: 12px;
`;
//subtitle still needs to padding 12 px;
const title = ({ title }) => {
  return <h2 className="fs-24px fw-bold m-0">{title}</h2>;
};
const subtitle = ({ subtitle }) => {
  return <h3 className="fs-12px fw-light m-0 ">{subtitle}</h3>;
};

const left = ({ children }) => {
  return <StyledLeft>{children}</StyledLeft>;
};

const right = ({ children }) => {
  return <StyledRight className="d-flex">{children}</StyledRight>;
};
const center = ({ children }) => {
  return <StyledCenter>{children}</StyledCenter>;
};

export const StepHeader = ({ flex, children, title, subtitle }) => {
  return <Container $flex={flex}>{children}</Container>;
  // return <Container $grid={grid}>{children}</Container>;
};

StepHeader.Left = left;
StepHeader.Center = center;
StepHeader.Right = right;
StepHeader.Title = title;
StepHeader.SubTitle = subtitle;
