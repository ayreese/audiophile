import styled from "styled-components";
import { Button } from "./Button.style";

export const CartStyle = styled.div`
  position: absolute;
  background-color: rgba(211, 211, 211, 0.8);
  top: 10%;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  flex-direction: row-reverse;
  .card {
    width: 20%;
    background-color: ${({ theme }) => theme.colors.senary};
    z-index: 10000;
    position: absolute;
    padding-inline: 1.25rem;
    left: 75%;
    top: 3%;
    border-radius: 0.5rem;
    .heading {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
      align-content: center;
      .cartCount {
        flex-basis: 100%;
        background-color: transparent;
      }
      .removeButton {
        align-self: center;

        button {
          padding-block: 0.75rem;
          padding-inline: 3rem;
          flex-basis: 100%;
          background-color: transparent;
          border: none;
          white-space: nowrap;
        }
      }
    }
    .center {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
      .itemImg {
        background-color: ${({ theme }) => theme.colors.tertiary};
        border-radius: 0.5rem;
      }
      h6 {
        margin: 0;
        align-self: center;
      }
      p {
        margin: 0;
      }
      .counter {
        color: ${({ theme }) => theme.colors.septenary};
        background-color: ${({ theme }) => theme.colors.tertiary};
        text-align: center;
        white-space: nowrap;
        /* align-self: flex-start; */

        button {
          color: ${({ theme }) => theme.colors.septenary};
          background-color: ${({ theme }) => theme.colors.tertiary};
          white-space: nowrap;
        }
        button:hover {
          background-color: ${({ theme }) => theme.colors.tertiary};
        }
      }
    }
    .bottom {
      display: flex;
      flex-direction: column;
      .total {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h6 {
          font-size: 1.5rem;
        }
        p {
          font-size: 1.5rem;
        }
      }
    }
  }
`;

export const CheckoutButton = styled(Button)`
  width: 100%;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;
