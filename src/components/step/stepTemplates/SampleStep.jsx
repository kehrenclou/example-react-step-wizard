import { StepHeader } from "../stepComponents/StepHeader";
import StepContainer from "../stepComponents/StepContainer";
import StepBody from "../stepComponents/StepBody";
import StepFooter from "../stepComponents/StepFooter";
import {StepButton } from "../../button/Button";
import { BackButton } from "../../button/iconButton";

export default function SampleStep({
  SW,
  title,
  subTitle,
  btntext,
  stepBody,
  onBackClick,
  onForwardClick,
  grid,
}) {
  // const handleForwardClick = (SW, nextStep) => {
  //   SW.goToNamedStep({ nextStep });
  // };
  // const handleBackClick = (SW, previousStep) => {
  //   SW.goToNamedStep({ previousStep });
  // };
  return (
    <>
      <StepContainer>
        <StepHeader grid={grid}>
          <StepHeader.Left>
            <BackButton onClick={onBackClick} />
          </StepHeader.Left>
          <StepHeader.Center>
            <StepHeader.Title title={title}></StepHeader.Title>
            <StepHeader.SubTitle subtitle={subTitle}></StepHeader.SubTitle>
          </StepHeader.Center>
          <StepHeader.Right></StepHeader.Right>
        </StepHeader>

        <StepBody>{stepBody}</StepBody>
        <StepFooter className="d-grid gap-2">
          <StepButton onClick={onForwardClick}>{btntext}</StepButton>
        </StepFooter>
      </StepContainer>
    </>
  );
}
 
