import React, { useCallback, useMemo, useState } from "react";
import StepWizard from "react-step-wizard";
import {
  ChoosePeersStep,
  FinishRegStep,
  FooBar,
  NotifyPeersStep,
  SeedStep,
  SignUpStep,
  SkipStep,
} from "./steps/SignUpSteps";

import ModalStub from "./stepBodyStubs/ModalStub";

//context - does this need to go in a separate file
//does one context work for the entire app
export const WizardContext = React.createContext();

function SignUpWizard() {
  //updates context?
  const [state, updateState] = useState({
    form: {},
    seedPhrases: [],
  });

  const updateForm = useCallback(
    (key, value) => {
      const { form } = state;
      form[key] = value;
      updateState({
        ...state,
        form,
      });
    },
    [state]
  );
  const updateSeeds = useCallback(
    (key, value) => {
      const { seedPhrases } = state;
      seedPhrases[key] = value;
      updateState({
        ...state,
        seedPhrases,
      });
    },
    [state]
  );

  const storeValue = useMemo(() => {
    return {
      state,
      updateForm,
      updateSeeds,
    };
  }, [state, updateForm, updateSeeds]);

  //do something on stepchange
  const onStepChange = (stats) => {
    console.log(stats);
    console.log(state);
  };

  const setInstance = (SW) => updateState({ ...state, SW });
  const { SW } = state;

  const handleForwardClick = (nextStep) => {
    console.log(nextStep);
  };
  const handleBackClick = () => {
    console.log(nextStep);
  };
  //to customize transitions from animate.css
  let custom = {};

  function goTo(step) {
    return () => SW.goToNamedStep(step);
  }

  return (
    <WizardContext.Provider value={storeValue}>
      <StepWizard
        onStepChange={onStepChange}
        instance={setInstance}
        transitions={custom}
      >
        {/* steps go here with sw */}
        {/* <SignupForm></SignupForm> */}
        <SignUpStep
          stepName="signup"
          SW={SW}
          onForwardClick={goTo("seed")}
          onBackClick={() => SW.goToNamedStep("foobar")}
          //forward={"seed"}
        ></SignUpStep>
        <FooBar
          stepName="foobar"
          SW={SW}
          onForwardClick={goTo("signup")}
          onBackClick={() => SW.goToNamedStep("signup")}
        ></FooBar>
        <SeedStep
          stepName="seed"
          SW={SW}
          onForwardClick={() => SW.goToNamedStep("fakemodal")}
          onBackClick={() => SW.goToNamedStep("signup")}
        ></SeedStep>
        <ModalStub
          stepName="fakemodal"
          SW={SW}
          onSkipClick={() => SW.goToNamedStep("skipstep")}
          onStorePeersClick={() => SW.goToNamedStep("choosepeers")}
        ></ModalStub>
        <SkipStep
          stepName="skipstep"
          SW={SW}
          onForwardClick={() => SW.goToNamedStep("finishreg")}
          onBackClick={() => SW.goToNamedStep("signup")}
        ></SkipStep>

        <ChoosePeersStep
          stepName="choosepeers"
          SW={SW}
          onForwardClick={() => SW.goToNamedStep("notifypeers")}
          onBackClick={() => SW.goToNamedStep("seed")}
        ></ChoosePeersStep>
        <NotifyPeersStep
          stepName="notifypeers"
          SW={SW}
          onForwardClick={() => SW.goToNamedStep("finishreg")}
        ></NotifyPeersStep>
        <FinishRegStep
          stepName="finishreg"
          SW={SW}
          onForwardClick={() => alert("Need code to open email app")}
        ></FinishRegStep>
      </StepWizard>
    </WizardContext.Provider>
  );
}
export default SignUpWizard;
