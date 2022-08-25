import styled from "styled-components";

export const CheckoutStyle = styled.div`
  margin: 5rem;
  form {
    display: flex;
    flex-direction: column;
    background-color: white;
    label {
      padding-bottom: 2rem;
    }
    .formSection {
      display: flex;
      flex-direction: column;
      .title {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.primary};
      }
      .inputFields {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem;
      }

      .labelAndInput {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        flex-basis: 33%;
        #street {
          flex-basis: 100%;
        }
        input {
          -webkit-appearance: none;
          -moz-appearance: none;
          border-width: 1px;
          border-radius: 8px;
          padding: 20px 10px;
        }
      }
    }
  }
`;
