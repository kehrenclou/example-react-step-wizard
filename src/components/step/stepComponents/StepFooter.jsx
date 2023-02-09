import styled from "styled-components/macro";

const StyledFooter = styled.footer`
  margin-top: 24px;
`;
const StepFooter = ({ children }) => {
  return <StyledFooter className="w-100 d-grid gap-2">{children}</StyledFooter>;
};
export default StepFooter;
