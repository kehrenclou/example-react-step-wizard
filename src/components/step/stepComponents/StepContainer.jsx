import styled from "styled-components/macro";
//should all of the styles go to the div written in bootstrap?
const StyledWrapper = styled.div`
  padding: 32px 16px 24px 16px;
  margin: 0 auto;
  max-width: 375px;
  min-height: 762px;
  //removing height no more flex grow
`;
const StepContainer = ({ children }) => {
  return (
    <StyledWrapper className="d-flex flex-column bg-alpha">
      {children}
    </StyledWrapper>
  );
};

export default StepContainer;
