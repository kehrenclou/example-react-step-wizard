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
  center,
  stepBody,
  footer,
}) {
  return (
    <StepContainer>
      {/* //original step */}
      {/* <StepHeaderTest
        left={left}
        center={
          <>
            {title && <StepHeaderTest.Title title={title} />}
            {subtitle && <StepHeaderTest.SubTitle subtitle={subtitle} />}
          </>
        }
        right={right}
      ></StepHeaderTest> */}
      {/* //phoenix step */}
      <StepHeaderTest>
        <StepHeaderTest.Left>{left}</StepHeaderTest.Left>
        <StepHeaderTest.Center>
          {title && <StepHeaderTest.Title title={title} />}
          {/* instead of passing title, pass center in center pass title component
          and the notification counter */}
          {subtitle && <StepHeaderTest.SubTitle subtitle={subtitle} />}
          {center}
        </StepHeaderTest.Center>
        <StepHeaderTest.Right>{right}</StepHeaderTest.Right>
      </StepHeaderTest>
      <StepBody>{stepBody}</StepBody>
      <StepFooter>{footer}</StepFooter>
    </StepContainer>
  );
}
