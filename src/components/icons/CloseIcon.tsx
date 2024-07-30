import { Icon, IconProps } from "@chakra-ui/react";

const CloseIcon = (props: IconProps) => {
  return (
    <Icon {...props} fill={"none"} viewBox="0 0 20 20">
      <g>
        <path
          d="M6.0625 15L5 13.9375L8.9375 10L5 6.0625L6.0625 5L10 8.9375L13.9375 5L15 6.0625L11.0625 10L15 13.9375L13.9375 15L10 11.0625L6.0625 15Z"
          fill="currentColor"
        />
      </g>
    </Icon>
  );
};

export default CloseIcon;
