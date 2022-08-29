import styled from "styled-components";

export const CheckoutStyle = styled.div`
  /* margin: 5rem; */
  background-color: #f2f2f2;

  form {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: auto;
    padding-block: 5rem;
    padding-inline: min(10vw, 10rem);
    gap: 2rem;
    box-sizing: border-box;
    input {
      display: block;
      -webkit-appearance: none;
      -moz-appearance: none;
      border-width: 1px;
      border-radius: 8px;
      padding: 20px 10px;
      flex: 1 1 100%;
    }
    input:focus {
      border-color: ${({ theme }) => theme.colors.primary};
    }
    label {
      width: 100%;
      display: block;
    }
    .formInfo {
      flex: 1 1 75%;
      display: flex;
      flex-direction: column;
      background-color: white;
      padding: 5rem;
    }
    .formSection {
      display: flex;
      flex-direction: column;
      margin-bottom: 5rem;
      .title {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.primary};
      }
      .inputFields {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem;
        .inputRow {
          flex: 1 1 100%;
          display: flex;
          gap: 2rem;
          flex-flow: row nowrap;
        }
      }
      .payment {
        display: flex;
        flex-direction: column;
      }
      .labelAndInput {
        display: flex;
        flex-flow: column nowrap;
        box-sizing: border-box;
        flex-basis: 100%;
        gap: 1rem;
        #country {
          box-sizing: border-box;
          flex-basis: 50%;
          width: 50%;
        }
        #street {
          flex-basis: 100%;
        }
      }
    }
    #paymentSection {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      h3 {
        color: black;
        margin: 0;
        flex: 1 1 100%;
        text-transform: capitalize;
        align-self: flex-start;
        font-size: 16px;
      }
      .paymentMethod {
        flex: 1 1 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 3rem;
        box-sizing: border-box;
        gap: 1rem;
        .paymentType {
          /* width: 48%; */
          border: 1px solid;
          border-radius: 8px;
          padding: 20px 10px;
        }
      }
    }

    .paymentCredentials {
      display: flex;
      flex-direction: row;
      gap: 2rem;
    }
    input[type="radio"] {
      height: 16px !important;
      -moz-appearance: radio !important;
    }
    .card {
      display: inline-block;
      flex: 1 1 25%;
      padding-block: 2rem;
      padding-inline: 5rem;
      height: fit-content;
      background-color: ${({ theme }) => theme.colors.senary};
      padding-inline: 1.25rem;
      border-radius: 0.5rem;
      .heading {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        align-content: center;
        margin-bottom: 3rem;
        font-size: 1.15rem;
        font-weight: bold;
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
          margin-right: auto;
          padding-left: 1rem;
          text-transform: uppercase;
        }
        h6 {
          margin: 0;
        }
        p {
          margin: 0;
        }
        .counter {
          font-size: 1rem;
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
            color: #000000;
          }
          p {
            font-size: 1.5rem;
            opacity: 0.5;
            margin-block: 1rem;
          }
        }
        .checkoutButton {
          input[type="submit"] {
            width: 100%;
            border-radius: 0;
            color: ${({ theme }) => theme.colors.tertiary};
            background-color: ${({ theme }) => theme.colors.primary};
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    form {
      flex-direction: column;
      padding-inline: 2rem;
      .formInfo {
        flex: 1 1 75%;
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 1.75rem;
      }

      .formSection {
        display: flex;
        flex-direction: column;
        margin-bottom: 5rem;
        .title {
          font-size: 1.5rem;
          color: ${({ theme }) => theme.colors.primary};
        }
        .inputFields {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          gap: 2rem;
          .inputRow {
            display: flex;
            justify-content: space-between;
            width: 100%;
          }
        }
        .payment {
          display: flex;
          flex-direction: column;
        }
        .labelAndInput {
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          flex-basis: 100%;
          #street {
            flex-basis: 100%;
          }
        }
      }
      #paymentSection {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 5rem;
        h3 {
          color: black;
          margin: 0;
          flex: 1 1 100%;
          text-transform: capitalize;
          align-self: flex-start;
          font-size: 16px;
        }
        .paymentMethod {
          flex: 1 1 100%;
          display: flex;
          flex-direction: column;
          margin-bottom: 3rem;
          box-sizing: border-box;
          gap: 1rem;
          .paymentType {
            flex-basis: 100%;
            border: 1px solid;
            border-radius: 8px;
            padding: 20px 10px;
            /* display: flex;
            justify-content: flex-start; */
            input {
              display: inline;
            }
            label {
              display: inline;
            }
          }
        }
      }
    }
  }
  .card {
    padding-inline: 2rem;
  }
  @media only screen and (max-width: 560px) {
    form {
      .formSection {
        .inputFields {
          flex-direction: column;
          .inputRow {
            flex-flow: column nowrap;
          }
        }
      }
      .paymentCredentials {
        flex-direction: column;
      }
    }
  }
`;
