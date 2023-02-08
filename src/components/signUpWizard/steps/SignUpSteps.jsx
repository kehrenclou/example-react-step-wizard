import SampleStep from "../../step/stepTemplates/SampleStep";
import SampleStepB from "../../step/stepTemplates/SampleStepB";
import SeedStub from "../stepBodyStubs/SeedStub";

// import ModalStub from "../stepBodyStubs/ModalStub";
import SkipStepStub from "../stepBodyStubs/SkipStepStub";
// import FinishRegStub from "../stepBodyStubs/FinishRegStub";
import ChoosePeersStub from "../stepBodyStubs/ChoosePeersStub";

import { StepButton } from "../../button/Button";//import for a button
import { BackButton } from "../../button/iconButton";//import for a button
import SampleStepTest from "../../step/stepTemplates/SampleStepTest"; //this would be the reusable component
import SignupStub from "../stepBodyStubs/SignupStub";//this would be the form


//teststep
export function SignUpStep({ SW, onForwardClick, onBackClick }) {
  return (
    <SampleStepTest
      left={<BackButton on Click={onBackClick} />}
      title="Sign up"
      subtitle="Step 1/4"
      stepBody={<SignupStub />}
      footer={<StepButton onClick={onForwardClick}>Continue</StepButton>}
    ></SampleStepTest>
  );
}

// export function SignUpStep({ SW, onForwardClick, onBackClick }) {
//   return (
//     <SampleStep
//       previousStep=""
//       title="Sign Up"
//       subTitle="Step 1/4"
//       btntext="Continue"
//       stepBody={<SignupStub />}
//       onBackClick={onBackClick}
//       onForwardClick={onForwardClick}
//       // grid="three"
//       // onClick={() => SW.goToNamedStep("seedPhrase")}
//     ></SampleStep>
//   );
// }
export function SeedStep({ SW, onForwardClick, onBackClick, nextStep }) {
  return (
    <SampleStep
      title="Sign Up"
      subTitle="Step 2/4"
      btntext="Continue"
      stepBody={<SeedStub />}
      onBackClick={onBackClick}
      onForwardClick={onForwardClick}
      // grid="three"
    ></SampleStep>
  );
}
export function SkipStep({ SW, onForwardClick, onBackClick, nextStep }) {
  return (
    <SampleStep
      title="Sign Up"
      subTitle="Step 3/4"
      btntext="Continue"
      stepBody={<SkipStepStub />}
      onBackClick={onBackClick}
      onForwardClick={onForwardClick}
      // grid="three"
    ></SampleStep>
  );
}
export function FinishRegStep({ SW, onForwardClick, onBackClick, nextStep }) {
  return (
    <SampleStepB
      title="We've sent a link to your email to finish your registration process"
      btntext="Open email app"
      onForwardClick={onForwardClick}
      // grid="one"
      flex
    ></SampleStepB>
  );
}
export function NotifyPeersStep({ SW, onForwardClick, nextStep }) {
  return (
    <SampleStep
      title="Sign up"
      subTitle="Step 4/4"
      btntext="Finish Registration"
      stepBody="Great, the peers you've chosen will recieve notification"
      //without a step body div, the subtitle shrinks not sure why
      //made center to flex box didn't matter
      onForwardClick={onForwardClick}
      // grid="one"
    ></SampleStep>
  );
}
export function ChoosePeersStep({ SW, onForwardClick, onBackClick, nextStep }) {
  //will need an onSubmit event handler for API call
  return (
    <SampleStep
      title="Sign Up"
      subTitle="Step 3/4"
      btntext="Share seed phrase"
      stepBody={<ChoosePeersStub />}
      onBackClick={onBackClick}
      onForwardClick={onForwardClick}
      // grid="three"
    ></SampleStep>
  );
}
