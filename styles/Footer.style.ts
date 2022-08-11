import styled from "styled-components";

export const FooterStyle = styled.footer`
  background-color: ${({ theme }) => theme.colors.septenary};
  box-sizing: border-box;
  padding-left: 10%;
  padding-right: 10%;
  .design-section {
    .design {
      background-color: ${({ theme }) => theme.colors.primary};
      width: 150px;
      height: 4px;
      // margin-bottom: 2.5rem;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    margin-top: 4.6875rem;

    .logo-links {
      display: flex;
    }
    p {
      width: 50%;
      color: ${({ theme }) => theme.colors.senary};
      margin-bottom: 30px;
      font-weight: 500;
      line-height: 25px;
    }
    img {
      object-fit: contain;
      width: 150px;
      margin-bottom: 30px;
      grid-area: first;
    }
  }
  ul {
    display: flex;
    flex: 0 1 100%;
    text-transform: uppercase;
    justify-content: flex-end;
    gap: 5%;
    li {
      display: block;
      // padding-right: 30px;
      color: white;
    }
  }

  .bottom-footer {
    display: flex;
    justify-content: space-between;
    padding-bottom: 4.6875rem;
    p {
      color: ${({ theme }) => theme.colors.tertiary};
      flex: 1 1 100%;
    }
    .social {
      display: flex;
      gap: 5%;
      flex: 1 1 100%;
      justify-content: flex-end;
    }
    a {
      text-decoration: none;
    }
  }

  @media only screen and (max-width: 780px) {
    .info {
      .description {
        p {
          width: 100%;
        }
      }
      .logo-links {
        flex-direction: column;
        ul {
          justify-content: flex-start;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 375px) {
    padding-left: 1%;
    padding-right: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .info {
      .description {
        p {
          text-align: center;
        }
      }
      .logo-links {
        align-items: center;
        ul {
          flex-direction: column;
          align-items: center;
        }
        li {
          margin-bottom: 0.5rem;
        }
      }
    }
    .bottom-footer {
      flex-direction: column;
      align-items: center;
      .copyright {
        margin-bottom: 2rem;
      }
      .social {
        width: 100%;
        justify-content: center;
        gap: 10%;
      }
    }
  }
`;
