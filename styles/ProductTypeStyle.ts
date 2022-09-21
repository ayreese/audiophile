import styled from "styled-components";

export const Type = styled.section`
  .main {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    width: 90%;
    max-width: 1600px;
    margin: auto;
    margin-top: 10.625rem;
    margin-bottom: 10.625rem;
    gap: 1rem;
    box-sizing: border-box;
    max-width: 1600px;

    .product-type {
      display: flex;
      flex-direction: row;
      box-sizing: border-box;
      max-width: 25rem;
      min-width: 14.0625rem;
      flex-basis: 100%;
      flex-direction: column;
      justify-content: flex-end;
      text-align: center;
      position: relative;

      a:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
      img {
        margin-bottom: 3rem;
        max-width: 100%;
      }
      p {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.125rem;
      }
      a {
        padding-bottom: 1.25rem;
        text-transform: uppercase;
        text-decoration: none;
        font-size: 0.8125rem;
        color: ${({ theme }) => theme.colors.septenary};

        span {
          color: ${({ theme }) => theme.colors.primary};
          font-size: 1.25rem;
        }
      }
    }
    .description-bg {
      width: 100%;
      height: 70%;
      position: absolute;
      background-color: ${({ theme }) => theme.colors.tertiary};
      border-radius: 0.5rem;
      z-index: -1;
    }
    .product-description {
      padding-bottom: 1.875rem;

      padding-bottom: 1.875rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .main {
      flex-wrap: wrap;
      justify-content: space-around;
    }
    .product-type {
      margin-bottom: 1.875rem;
      p {
        font-size: 0.9375rem;
      }
      a {
        font-size: 0.8125rem;
      }
      .headphones {
        content: url("headphones-tablet.png");
      }
    }
  }
`;
