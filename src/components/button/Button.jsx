import BS_Button from "react-bootstrap/Button";

export const Button = (props) => {
  return <BS_Button {...props} />;
};

export const StepButton = (props) => {
  return (
    <Button
      type="button"
      variant="primary"
      size="lg"
      className="btn w-100"
      {...props}
    >{props.text}</Button>
  );
};
