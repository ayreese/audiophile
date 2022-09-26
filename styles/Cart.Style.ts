import styled from "styled-components";
import { Button } from "./Button.style";

export const CartStyle = styled.div`
  .main {
    position: absolute;
    background-color: rgba(211, 211, 211, 0.8);
    top: 100%;
    width: 100%;
    left: 0;
    height: 100vh;
    z-index: 100;
    display: flex;
    justify-content: flex-end;
    overflow-y: hidden;

    .card {
      height: auto;
      background-color: ${({ theme }) => theme.colors.senary};
      z-index: 1000;
      position: absolute;
      padding-block: 2rem;
      padding-inline: 2rem;
      right: 10rem;
      top: 2rem;
      border-radius: 0.5rem;
      z-index: 10000;
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
          opacity: 0.7;
          button {
            padding-block: 0 3rem;
            padding-inline: 7rem 0;
            flex-basis: 100%;
            background-color: transparent;
            border: none;
            white-space: nowrap;
            cursor: pointer;
          }
          button:hover {
            color: ${({ theme }) => theme.colors.primary};
          }
        }
      }
      .center {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        .itemImg {
          img {
            object-fit: contain;
            width: 4.5rem;
            border-radius: 0.5rem;
          }
        }
        .itemInfo {
          text-align: left;
          text-transform: uppercase;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 10rem;
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

          button {
            color: ${({ theme }) => theme.colors.septenary};
            background-color: ${({ theme }) => theme.colors.tertiary};
            white-space: nowrap;
          }
          button:hover {
            color: ${({ theme }) => theme.colors.primary};
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
            opacity: 0.7;
          }
          p {
            font-size: 1.5rem;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 810px) {
    .main {
      top: 100%;
      .card {
        right: 2rem;
        top: 2rem;
        .center {
          .itemInfo {
            padding-right: 3rem;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 428px) {
    .main {
      .card {
        right: 0.5rem;
        .center {
          .itemInfo {
            padding-right: 2rem;
          }
        }
      }
    }
  }
`;

export const CheckoutButton = styled(Button)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;
