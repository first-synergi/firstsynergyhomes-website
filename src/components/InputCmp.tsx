import {
  FormControl,
  Input,
  InputProps,
  Text,
  Textarea,
  TextareaProps,
} from "@chakra-ui/react";
import React from "react";

interface IInput extends InputProps {
  label: string;
  error?: boolean;
}

interface ITextArea extends TextareaProps {
  label: string;
  error?: boolean;
}

const TextAreaCmp = ({ label, error, ...props }: ITextArea) => {
  return (
    <FormControl>
      <Text color={"primary"} fontSize={"16px"} mb={"8px"}>
        {label}
      </Text>
      <Textarea
        bg={"#FAFAFA"}
        borderBottom={"1px solid"}
        borderColor={error ? "red" : "primary"}
        borderRadius={"2px"}
        color={"primary"}
        type="text"
        w="full"
        px={"24px"}
        variant={"flushed"}
        resize={"none"}
        height={"279px"}
        _focusVisible={{ outline: "none", border: "1px solid" }}
        {...props}
      />
    </FormControl>
  );
};

const InputCmp = ({ label, error, ...props }: IInput) => {
  return (
    <FormControl>
      <Text color={"primary"} fontSize={"16px"} mb={"8px"}>
        {label}
      </Text>
      <Input
        bg={"#FAFAFA"}
        borderBottom={"1px solid"}
        borderColor={error ? "red" : "primary"}
        borderRadius={"2px"}
        color={"primary"}
        height={"50px"}
        type="text"
        w="full"
        px={"24px"}
        variant={"flushed"}
        _focusVisible={{ outline: "none", border: "1px solid" }}
        {...props}
      />
    </FormControl>
  );
};

export { InputCmp, TextAreaCmp };
