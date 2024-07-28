import React from "react";
import { ButtonProps, Button as ChakraBtn } from "@chakra-ui/react";

interface IButton extends ButtonProps {
  label: string;
  onClick?: () => void;
}
const Button = ({ label, onClick, ...props }: IButton) => {
  return (
    <ChakraBtn
      fontFamily="button"
      bgColor={"button.secondary"}
      borderRadius={"2px"}
      color={"button.white"}
      fontSize="20px"
      fontStyle="normal"
      fontWeight={700}
      lineHeight="100%"
      onClick={onClick}
      padding={"18px"}
      height={"56px"}
      _hover={{ bgColor: "button.secondary" }}
      {...props}
    >
      {label}
    </ChakraBtn>
  );
};

export default Button;
