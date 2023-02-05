import styled from "styled-components";
//should all of the styles go to the div written in bootstrap?
const StyledWrapper = styled.div`
  padding: 32px 16px 24px 16px;
  margin: 0 auto;
  width: 375px;
  height: 762px;
`;
const StepContainer = ({ children }) => {
  return (
    <StyledWrapper className="d-flex flex-column bg-alpha">
      {children}
    </StyledWrapper>
  );
};

export default StepContainer;
