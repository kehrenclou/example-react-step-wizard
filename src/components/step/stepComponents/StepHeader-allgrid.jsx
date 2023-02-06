import styled, { css } from "styled-components/macro";


const Container = styled.div`
  display: grid;
  color: var(--bs-white);
  grid-template-columns: 1fr minmax(40px, auto) 1fr;
  margin-bottom: 32px;

  ${(props) => {
    switch (props.$grid) {
      case "one":
        return css`
          grid-template-areas: "main main main";
        `;
      case "two":
        return css`
          grid-template-areas: "left main .";
        `;
      case "three":
        return css`
          grid-template-areas: "left main right";
        `;
    }
  }}
`;

const StyledLeft = styled.div`
  grid-area: left;
  justify-self: start;
`;
const StyledCenter = styled.div`
  grid-area: main;
  justify-self: center;
`;
const StyledRight = styled.div`
  grid-area: right;
  justify-self: end;
  align-items: flex-start;
  /* display: flex; */
  column-gap: 12px;
`;
const title = ({ title }) => {
  return <h2 className="fs-24px fw-bold m-0">{title}</h2>;
};
const subtitle = ({ subtitle }) => {
  return <h3 className="fs-12px fw-light m-0">{subtitle}</h3>;
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

export const StepHeader = ({ grid, children, title, subtitle }) => {
  return <Container $grid={grid}>{children}</Container>;
};

StepHeader.Left = left;
StepHeader.Center = center;
StepHeader.Right = right;
StepHeader.Title = title;
StepHeader.SubTitle = subtitle;
