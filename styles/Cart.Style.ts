import styled from "styled-components";
import { Button } from "./Button.style";

export const CartStyle = styled.div`
  position: absolute;
  background-color: rgba(211, 211, 211, 0.8);
  top: 9.2%;
  width: 100vw;
  left: 0;
  height: 100vh;
  z-index: 1000;
  max-width: 24000px;
  flex-direction: row-reverse;

  .card {
    .loading {
      width: 100%;
      height: 100%;
      z-index: 10000;
      position: absolute;
      object-fit: cover;
      left: 0;
      border: none;
    }
    width: 20%;
    height: auto;
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
        cursor: pointer;

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
        img {
          object-fit: contain;
          width: 4.5rem;
        }
      }
      .itemInfo {
        text-align: left;
        text-transform: uppercase;
      }
      h6 {
        margin: 0;
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
