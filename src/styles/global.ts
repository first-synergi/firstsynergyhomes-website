import { css } from "@emotion/react";

export const GlobalStyles = css`
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .no-scrollbar::-webkit-scrollbar {
    width: 0px;
  }
  .no-scrollbar::-webkit-scrollbar-thumb {
    display: none;
  }
`;
