import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-top: 24px;
`;
const StepFooter = ({ children }) => {
  return <StyledFooter w-100>{children}</StyledFooter>;
};
export default StepFooter;