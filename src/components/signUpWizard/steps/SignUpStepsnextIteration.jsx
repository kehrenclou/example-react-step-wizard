import SeedStub from "../stepBodyStubs/SeedStub";

// import ModalStub from "../stepBodyStubs/ModalStub";
import SkipStepStub from "../stepBodyStubs/SkipStepStub";
// import FinishRegStub from "../stepBodyStubs/FinishRegStub";
import ChoosePeersStub from "../stepBodyStubs/ChoosePeersStub";

import { StepButton } from "../../button/Button"; //import for a button
import { BackButton } from "../../button/iconButton"; //import for a button
import SampleStepTest from "../../step/stepTemplates/SampleStepTest"; //this would be the reusable component
import SignupStub from "../stepBodyStubs/SignupStub"; //this would be the form

//teststep
export function SignUpStep({ onForwardClick, onBackClick, SW, forward }) {
  return (
    <SampleStepTest
      left={<BackButton onClick={onBackClick} />}
      title="Sign up"
      subtitle="Step 1/4"
      stepBody={<SignupStub />}
      // footer={<StepButton onClick={onForwardClick} text="Continue" />}
      // footer={<StepButton onClick={() => onForwardClick("seed")} text="Continue" />}
      //footer={
      //  <StepButton onClick={() => SW.gotoNamedStep(forward)} text="Continue" />
      //}
    ></SampleStepTest>
  );
}

export function SeedStep({ onForwardClick, onBackClick }) {
  return (
    <SampleStepTest
      left={<BackButton onClick={onBackClick} />}
      title="Sign Up"
      subtitle="Step 2/4"
      stepBody={<SeedStub />}
      footer={<StepButton onClick={onForwardClick} text="Continue" />}
    ></SampleStepTest>
  );
}
export function SkipStep({ onForwardClick, onBackClick }) {
  return (
    <SampleStepTest
      left={<BackButton onClick={onBackClick} />}
      title="Sign Up"
      subtitle="Step 3/4"
      stepBody={<SkipStepStub />}
      footer={<StepButton onClick={onForwardClick} text="Continue" />}
    ></SampleStepTest>
  );
}
export function FinishRegStep({ onForwardClick }) {
  return (
    <SampleStepTest
      title="We've sent a link to your email to finish your registration process"
      onForwardClick={onForwardClick}
      footer={<StepButton onClick={onForwardClick} text="Open email app" />}
    ></SampleStepTest>
  );
}
export function NotifyPeersStep({ onForwardClick }) {
  return (
    <SampleStepTest
      title="Sign up"
      subtitle="Step 4/4"
      stepBody="Great, the peers you've chosen will recieve notification"
      footer={
        <StepButton onClick={onForwardClick} text="Finish Registration" />
      }
    ></SampleStepTest>
  );
}
export function ChoosePeersStep({ onForwardClick, onBackClick }) {
  //will need an onSubmit event handler for API call
  return (
    <SampleStepTest
      left={<BackButton onClick={onBackClick} />}
      title="Sign Up"
      subtitle="Step 3/4"
      stepBody={<ChoosePeersStub />}
      footer={<StepButton onClick={onForwardClick} text="Share Seed Phrase" />}
    ></SampleStepTest>
  );
}
export function FooBar({ onForwardClick }) {
  return (
    <SampleStepTest
     // title="We've sent a link to your email to finish your registration process"
     left={<BackButton onClick={onBackClick} />}
     center={
      <div className="d-flex">
        <StepHeaderTest.Title title="Some text"/>
        <NotificationCounter/>
      </div>
     }
      onForwardClick={onForwardClick}
      footer={<StepButton onClick={onForwardClick} text="Open email app" />}
    ></SampleStepTest>
  );
}