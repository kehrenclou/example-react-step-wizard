import StepBody from "../stepComponents/StepBody";
import StepContainer from "../stepComponents/StepContainer";
import StepFooter from "../stepComponents/StepFooter";
import { StepHeaderTest } from "../stepComponents/StepHeaderTest";

//test for reusable component
export default function SampleStepTest({
  // SW,
  left,
  title,
  subtitle,
  right,
  stepBody,
  footer,
}) {
  return (
    <StepContainer>
      <StepHeaderTest
        left={left}
        center={
          <>
            {title && <StepHeaderTest.Title title={title} />}
            {subtitle && <StepHeaderTest.SubTitle subtitle={subtitle} />}
          </>
        }
        right={right}
      ></StepHeaderTest>
      <StepBody>{stepBody}</StepBody>
      <StepFooter>{footer}</StepFooter>
    </StepContainer>
  );
}
