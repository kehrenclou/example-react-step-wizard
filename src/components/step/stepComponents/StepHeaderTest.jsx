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
  row-gap: 12px;
  display: flex;
  flex-direction: column;
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
  return <h2 className="fs-24px fw-bold m-0 px-1">{title}</h2>;
};
const subtitle = ({ subtitle }) => {
  return <h3 className="fs-12px fw-light m-0 ">{subtitle}</h3>;
};

const Left = ({ children }) => {
  return <StyledLeft>{children}</StyledLeft>;
};

const Right = ({ children }) => {
  return <StyledRight className="d-flex">{children}</StyledRight>;
};
const Center = ({ children }) => {
  return <StyledCenter>{children}</StyledCenter>;
};

// export const StepHeaderTest = ({ flex, children, title, subtitle }) => {
//   return <Container $flex={flex}>{children}</Container>;
//   // return <Container $grid={grid}>{children}</Container>;
// };
export const StepHeaderTest = ({
  flex,
  children,
  left,
  center,
  right,
  title,
  subtitle,
}) => {
  return (
    <Container $flex={flex}>
      <Left>{left}</Left>
      <Center>{center}</Center>
      <Right>{right}</Right>
    </Container>
  );
  // return <Container $grid={grid}>{children}</Container>;
};

// StepHeaderTest.Left = left;
// StepHeaderTest.Center = center;
// StepHeaderTest.Right = right;
StepHeaderTest.Title = title;
StepHeaderTest.SubTitle = subtitle;
