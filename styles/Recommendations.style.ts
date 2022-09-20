import styled from "styled-components";

export const RecommendationStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-inline: auto;
  max-width: 1600px;
  h3 {
    text-transform: uppercase;
    font-size: 3.25rem;
    margin-bottom: 4rem;
  }
  .boxes {
    display: flex;
    width: 100%;
    justify-content: space-around;
    gap: 2rem;
    .productBox {
      width: 100%;
      text-align: center;
      .imageBox {
        img {
          object-fit: contain;
          width: 100%;
        }
      }
      h4 {
        text-transform: uppercase;
      }
      button {
        padding-block: 1rem;
        padding-inline: 2rem;
        background-color: ${({ theme }) => theme.colors.primary};
        border: none;
        color: ${({ theme }) => theme.colors.tertiary};
        font-size: 1rem;
        a {
          color: ${({ theme }) => theme.colors.tertiary};
          text-decoration: none;
        }
      }
      button:hover {
        background-color: #fbaf85;
        cursor: pointer;
      }
    }
  }

  @media only screen and (max-width: 560px) {
    h3 {
      font-size: 1.5rem;
    }
    .boxes {
      flex-direction: column;
      align-items: center;
    }
  }
`;
