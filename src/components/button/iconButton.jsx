import { Button } from "./Button";
import styled from "styled-components/macro";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChevronLeft } from "@styled-icons/fa-solid/ChevronLeft";
import { ArrowRotateRight } from "@styled-icons/fa-solid/ArrowRotateRight";

//reusable icon button
export const IconButton = (props) => {
  return (
    <Button
      variant={props.variant}
      className={props.class}
      onClick={props.onClick}
      diabled={props.isDisabled}
      {...props}
    >
      {props.icon && props.icon}
    </Button>
  );
};

//back button
export const BackButton = (props) => {
  return (
    <IconButton
      variant="link"
      className="p-0"
      icon={<ChevronLeft size={16} color="#f6f6f6" />}
      {...props}
    />
  );
};
//back button
export const RotateArrowRight = (props) => {
  return (
    <IconButton
      variant="link"
      className="p-0"
      icon={<ArrowRotateRight size={16} color="#f6f6f6" />}
      {...props}
    />
  );
};
