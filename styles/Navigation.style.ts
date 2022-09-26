import styled from "styled-components";

type Props = {
  styleColor: string;
};

export const Nav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 3rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding-inline: 3rem;
  box-sizing: border-box;
  z-index: 100;
  position: relative;
  h1 {
    color: ${({ theme }) => theme.colors.senary};
  }

  .menu {
    display: none;
  }

  .logo {
    flex-basis: 100%;
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-basis: 100%;
    text-align: center;
    /* gap: 1rem; */

    ul {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      list-style: none;
      text-transform: uppercase;
      margin: 0;
      li {
        padding-right: 1rem;
        a {
          text-decoration: none;
          color: ${({ theme }) => theme.colors.senary};
        }

        /* a:hover {
          color: ${({ theme }) => theme.colors.primary};
        } */
        /* a:visited {
          color: #fff;
        } */
      }
    }
  }

  .cart {
    color: white;
    flex-basis: 100%;
    text-align: right;
    button {
      cursor: pointer;
      background-color: transparent;
      border: none;
    }
    .cart-icon {
      color: white;
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: 810px) {
    padding-inline: 2.5rem;
    z-index: 100;
    position: relative;

    .menu-buttons {
      flex-basis: 100%;
      z-index: 10;
    }
    .menu {
      display: block;
      font-size: 1.5rem;
      color: white;
      background-color: ${({ theme }) => theme.colors.secondary};
      border: none;
    }
    .logo {
      text-align: center;
      z-index: 100;
    }
    nav {
      /* display: none; */
      /* position: fixed; */
      position: absolute;
      top: 100%;
      left: -1%;
      /* padding-left: 20px; */
      justify-content: space-between;
      background-color: ${({ theme }) => theme.colors.secondary};

      height: 100vh;

      ul {
        flex-direction: column;

        padding-left: 3rem;
        padding-right: 8rem;
        text-align: left;

        li {
          /* padding-right: 1rem; */
          a {
            text-decoration: none;
            color: ${({ theme }) => theme.colors.senary};
          }

          a:hover {
            color: ${({ theme }) => theme.colors.primary};
          }
          a:visited {
            color: #fff;
          }
        }
      }
      div:nth-child(1) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: auto;
        div {
          width: 3.125rem;
          height: 0.3125rem;
          background-color: #fafafa;
        }
      }
    }
    .close {
      transform: translateX(-100%);
      transition: transform 350ms ease-in;
    }
    .open {
      transform: translateX(0%);
      transition: transform 350ms ease-out;
    }
  }
`;
