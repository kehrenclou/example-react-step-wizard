#**Example of React-Step-Wizard**

##Getting Started

Install dependencies
```
npm install
```
Running the application:
```
npm run dev

##Dependencies Used
    react-step-wizard
    react-bootstrap bootstrap
    @styled-iconds/fa-solid
    sass
    styled-components

##Project Structure
Please note - this structure must be reviewd before implementing.
**see notes farther down about structure concerns
-src
    -components
        -button  
            -** StepButton created in Button.jsx
            -**resuable IconButton, BackButton, RotateArrowRight created in iconButton.jsx

        -signUpWizard (has components to feed the wizard)
            -stepBodyStubs
                - contains stubs to mimic forms that will be passed in to steps

            -steps
                -SignUpSteps.jsx
                    --this has all the steps used in the SignUpWizard.jsx example
                    --note on structure 
                        - not sure if each step should be created in its own file
                        - not sure if using SampleStep as a reusable component is best way to accomplish goals 

            -SignUpWizard.jsx (this is the wizard component for the signup flow)
                -WizardContext is in this file
                    -it is set up to take form and seedPhrase context
                    -?this probably should be moved to a context folder and imported
                    - not sure of which contexts each stepflow will need

        -step (has components to make a step)
            -stepComponents
                -StepBody.jsx
                    -component used for body of step (designed to pass in a form/other component)

                -StepContainer.jsx
                -StepFooter.jsx
                -StepHeader.jsx
                    - multiple components in this
                    - prop grid is used to determine grid layout
                    - not sure if this is the best wya to set up
                    - ? should we add conditions and props to determine the components used to make it more reusable?

            -stepTemplates (templates of different step structures)
                -SampleStep.jsx
                    -sample step component using 3 columns

                -SampleStepB.jsx
                    -sample step component using 1 columns (without buttons)

                - ** note this is probably not the way to go - there are other options out there for instance having 2 icon buttons in the left part of the header.  Need to figure out best practice for reusability

##Using StepWizard
- see StepWizard for all possible probs and details

##Passing Context
    -Context is passed currently in the SignUpWizard.jsx - should probably be moved out to its own folder
    -

