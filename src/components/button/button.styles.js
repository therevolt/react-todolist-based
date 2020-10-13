import { css } from "@emotion/core";

export const button = ({ align }) => css`
  widows: 24%;
  font-size: 1.8rem;
  font-family: "Bungee", sans-serif;
  background: unset;
  border: unset;
  outline: unset;
  cursor: pointer;
  padding: 16px;
  text-align: ${align};
`;
