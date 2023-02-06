// export { default as StepContainer } from "./StepContainer";
// export * as StepHeader from "./StepHeader";
// export { default as StepBody } from "./StepBody";
// export { default as StepFooter } from "./StepFooter";

import { StepBody as Body } from "./StepBody";
import { StepContainer as Container } from "./StepContainer";
import { StepHeader as Header } from "./StepHeader";

export const Step = {
  Body,
  Container,
  Header,
};


// somewhere else...

// import { Step } from "../components";

// // ...

// <Step.Body/>
// <Step.Header>
//     <Step.Header.Left/>
// </Step.Header>