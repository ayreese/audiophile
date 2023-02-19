import styled from "styled-components";
import {motion} from "framer-motion";

interface TitleProps {
    readonly primary?: boolean;
}

export const Button = styled.button<TitleProps>`
  padding: 0.9375rem 1.875rem;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  min-width: auto;
  border: none;
  color: ${({theme}) => theme.colors.senary};
  background-color: ${(props) =>
    props.primary ? props.theme.colors.primary : props.theme.colors.septenary};
  &:hover {
    background-color: ${(props) =>
    props.primary ? props.theme.colors.quinary : props.theme.colors.octonary};
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({theme}) => theme.colors.senary};
  }

  @media only screen and (max-width: 428px) {
    padding: 0.9375rem 1.5rem;
  }
`;
