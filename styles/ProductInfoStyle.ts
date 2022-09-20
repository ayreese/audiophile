import styled from "styled-components";

export const ProductInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 90%;
  box-sizing: border-box;
  margin-bottom: 10rem;
  margin-top: 10rem;
  margin-left: auto;
  margin-right: auto;

  .product-wrapper {
    display: flex;
    flex-direction: row;
    max-width: 1600px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3rem;
    border-radius: 0.5rem;
    align-items: center;
    .left {
      flex: 1 1 100%;
      padding: 3rem;
      background-color: ${({ theme }) => theme.colors.tertiary};
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

  @media only screen and (max-width: 780px) {
    padding-left: 1%;
    padding-right: 1%;
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

  @media only screen and (max-width: 560px) {
    .product-wrapper {
      flex-direction: column;
      .left {
        margin-bottom: 3rem;
        img {
          object-fit: cover;
        }
      }
      .right {
        padding-left: 0;
      }
    }
  }
`;

export const Features = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10rem;
  width: 90%;
  max-width: 1600px;
  gap: 7.8125rem;
  .product-features {
    flex: 0 1 75%;
    box-sizing: border-box;
    padding-right: 100px;

    h3 {
      text-transform: uppercase;
      margin-bottom: 3rem;
    }
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
    h3 {
      text-transform: uppercase;
      margin-bottom: 3rem;
    }
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

  @media screen and (max-width: 780px) {
    flex-direction: column;
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
  @media screen and (max-width: 560px) {
    .box-features {
      flex-direction: column;
    }
  }
`;

export const ProductPhotos = styled.div`
  display: flex;
  box-sizing: border-box;
  max-width: 1600px;
  gap: 1rem;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;
  .left {
    display: flex;
    box-sizing: border-box;
    gap: 1rem;
    flex-direction: column;
    flex-basis: 100%;
    img {
      object-fit: contain;
      width: 100%;
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

  @media screen and (max-width: 780px) {
    flex-direction: column;
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
`;
