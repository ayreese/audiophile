import { type } from "os";
import styled from "styled-components";

export const HeroStyle = styled.section`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  /* background-color: #141414; */
  margin-left: auto;
  margin-right: auto;

  .left {
    flex: 1 1 100%;
    text-transform: uppercase;
    color: $senary-color;
    padding-top: 0rem;
    padding-left: 3rem;

    p {
      font-size: 0.9375rem;
      line-height: 1.5625rem;
      padding-bottom: 1.5rem;
      color: ${({ theme }) => theme.colors.senary};
      margin: 0;
    }
    p:first-child {
      letter-spacing: 10px;
    }
    h1 {
      font-size: 3.5rem; //56px
      line-height: 3.625rem;
      font-weight: bold;
      letter-spacing: 0.125rem;
      padding-bottom: 1.5rem;
      color: ${({ theme }) => theme.colors.senary};
      margin: 0;
    }
    .product-button {
      padding: 0.9375rem 1.875rem;
      text-align: center;
      text-decoration: none;
      white-space: nowrap;
      font-size: 1rem;
      text-transform: uppercase;
      min-width: auto;
      margin-bottom: 1.25rem;
      background-color: ${({ theme }) => theme.colors.primary};
      border: none;
      color: ${({ theme }) => theme.colors.senary};
      a {
        text-decoration: none;
        color: white;
      }
    }
  }

  .right {
    flex: 100%;
    min-width: 0;
    img {
      object-fit: cover;
      max-width: 100%;
      width: 100%;
      height: 100%;
    }
  }

  @media only screen and (max-width: 780px) {
    h1 {
      font-size: 3.5rem;
    }
    .left {
      background-image: url("headphones-hero.png");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      text-align: center;
      padding-block: 6rem;
      padding-inline: 3rem;
    }
    .right {
      display: none;
    }
  }

  @media only screen and (max-width: 475px) {
    .left {
      padding-top: 10rem;
      h1 {
        font-size: 2.25rem;
        line-height: normal;
      }
    }
  }
`;
