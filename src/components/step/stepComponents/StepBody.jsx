import styled from "styled-components/macro";

const StyledBody = styled.div`
  flex-grow: 1;
  overflow:hidden;
  border:solid 1px yellow;
`;
 const StepBody = ({ children }) => {
    return <StyledBody>{children}</StyledBody>;
  };
  export default StepBody