import styled from "styled-components";

export const ProductInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: 10rem;
  margin-inline: 10.3rem;
  gap: 7.8125rem;
  .product-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3rem;
    border-radius: 0.5rem;
    align-items: center;
    .left {
      flex: 1 1 100%;
      text-align: center;
      margin-bottom: 2rem;
      img {
        object-fit: contain;
        max-width: 100%;
      }
    }
    .right {
      flex: 1 1 100%;
      padding-left: 7.5rem;
      h2 {
        text-transform: uppercase;
        padding-bottom: 1rem;
        margin: 0;
      }
      p:nth-child(1) {
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.primary};
        margin: 0;
      }
      p {
        padding-bottom: 1rem;
        margin: 0;
      }
      .buttons {
        display: flex;
        gap: 5%;
        width: 75%;

        //   flex-direction: row-reverse;
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
            background-color: ${({ theme }) => theme.colors.tertiary};
          }
        }

        button {
          color: ${({ theme }) => theme.colors.senary};
          background-color: ${({ theme }) => theme.colors.primary};
          border: none;
          padding-bottom: 1rem;
          a {
            text-decoration: none;
            color: ${({ theme }) => theme.colors.senary};
          }
        }
        button:hover {
          background-color: ${({ theme }) => theme.colors.quinary};
        }
      }
    }
  }

  @media only screen and (max-width: 810px) {
    margin-inline: 2.5rem;
    .product-wrapper {
      .left {
        margin-bottom: 0;
      }
      .right {
        padding-left: 1rem;
      }
    }

    h1 {
      font-size: 3.5rem;
    }
  }

  @media only screen and (max-width: 428px) {
    margin-inline: 1.5rem;

    .product-wrapper {
      flex-direction: column;
      .left {
        margin-bottom: 3rem;
        padding-left: 0;
        img {
          object-fit: cover;
        }
      }
      .right {
        padding-left: 0;
        h2 {
          font-size: 2rem;
        }
        .buttons {
          .counter {
          }
        }
      }
    }
  }
`;

export const Features = styled.div`
  display: flex;
  margin-inline: 10.3rem;
  margin-bottom: 10rem;
  gap: 7.8125rem;
  h3 {
    margin-bottom: 3rem;
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1.14286px;
    text-transform: uppercase;
  }
  .product-features {
    flex: 0 1 75%;
    padding-right: 100px;

    p {
      margin-bottom: 3rem;
      white-space: pre-wrap;
    }
  }
  .box-features {
    flex: 0 1 25%;
    display: flex;
    flex-direction: column;
    text-align: left;

    .box-content {
      display: flex;
      flex-direction: column;
      display: inline-block;
      text-align: left;
      .content {
        margin-bottom: 0.5rem;
        p:first-child {
          padding-right: 1%;
          color: ${({ theme }) => theme.colors.primary};
        }
        p {
          display: inline;
          text-transform: uppercase;
        }
      }
    }
  }

  @media screen and (max-width: 810px) {
    flex-direction: column;
    margin-inline: 2.5rem;

    .product-features {
      padding-right: 0;
    }
    .box-features {
      flex-direction: row;
      justify-content: space-between;
      h3 {
        margin-top: 0;
      }
    }
    .product-wrapper {
      flex-direction: column;
      justify-items: center;
      .right {
        padding-left: 1%;
        padding-right: 1%;
        text-align: center;
        .buttons {
          display: inline;
          .counter {
            display: inline;
            margin-right: 1rem;
            padding-block: 0.9rem;
            button {
              box-sizing: border-box;
              padding-block: 0;
            }
          }
          button {
            display: inline;
          }
        }
      }
    }
  }
  @media screen and (max-width: 428px) {
    margin-inline: 1.5rem;
    .box-features {
      flex-direction: column;
    }
  }
`;

export const ProductPhotos = styled.div`
  display: flex;
  margin-inline: 10.3rem;
  gap: 1rem;
  margin-bottom: 7.5rem;
  .left {
    display: flex;
    box-sizing: border-box;
    gap: 1rem;
    flex-direction: column;
    flex-basis: 100%;
    img {
      object-fit: contain;
      width: 100%;
      border-radius: 0.5rem;
    }
  }
  .right {
    flex-basis: 100%;
    box-sizing: border-box;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }

  @media screen and (max-width: 810px) {
    flex-direction: column;
    margin-inline: 2.5rem;
    .box-features {
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 10rem;
      align-content: flex-start;
      h3 {
        flex-basis: 50%;
        text-align: left;
      }
      .box-content {
        flex-basis: 50%;
      }
    }
  }
  @media screen and (max-width: 428px) {
    margin-inline: 1.5rem;
  }
`;
