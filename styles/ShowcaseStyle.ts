//import styled from "styled-components";
//
//export const ShowcaseStyle = styled.section`
//  margin-inline: 10.3rem;
//  .showcase-section-1 {
//    display: flex;
//    padding-top: 3.125rem;
//    justify-content: space-around;
//    background-color: ${({ theme }) => theme.colors.primary};
//    background-image: url("/showcase-circles.png");
//    background-repeat: no-repeat;
//    background-size: contain;
//    border-radius: 0.5rem;
//    margin-bottom: 3rem;
//    .showcase-img {
//      flex: 1 1 100%;
//      text-align: center;
//    }
//    img {
//      vertical-align: bottom;
//    }
//    a {
//      padding: 0.9375rem 1.875rem;
//      box-sizing: border-box;
//      text-align: center;
//      text-decoration: none;
//      white-space: nowrap;
//      font-size: 1rem;
//      text-transform: uppercase;
//      min-width: auto;
//      border: none;
//      color: ${({ theme }) => theme.colors.senary};
//      background-color: ${(props) => props.theme.colors.septenary};
//
//      &:hover {
//        background-color: ${(props) => props.theme.colors.octonary};
//      }
//    }
//
//    .toCenter {
//      display: flex;
//      flex-direction: column;
//      align-items: center;
//      align-self: center;
//      flex: 1 1 100%;
//      .description {
//        color: ${({ theme }) => theme.colors.quaternary};
//        height: auto;
//        .button {
//          margin-bottom: 3rem;
//        }
//      }
//    }
//  }
//  h4 {
//    font-weight: 700;
//    font-size: 28px;
//    line-height: 38px;
//    letter-spacing: 2px;
//    text-transform: uppercase;
//  }
//  .showcase-img-tablet {
//    display: none;
//  }
//  .showcase-section-2 {
//    width: 100%;
//    background-image: url("/showcaseBackground.png");
//    background-repeat: no-repeat;
//    background-size: cover;
//    background-position: center;
//    max-width: 100%;
//    border-radius: 0.5rem;
//    a {
//      padding: 0.9375rem 1.875rem;
//      box-sizing: border-box;
//      text-align: center;
//      text-decoration: none;
//      white-space: nowrap;
//      font-size: 1rem;
//      text-transform: uppercase;
//      min-width: auto;
//      border: 1.5px solid;
//      color: ${(props) => props.theme.colors.septenary};
//      background-color: none;
//
//      &:hover {
//        background-color: ${(props) => props.theme.colors.octonary};
//      }
//    }
//    .description {
//      padding: 6.25rem;
//      margin-bottom: 6.25rem;
//      align-self: center;
//      h4 {
//        margin-bottom: 2rem;
//      }
//    }
//  }
//  .showcase-section-3 {
//    display: flex;
//    flex-direction: row-reverse;
//    width: 100%;
//    text-transform: uppercase;
//    gap: 0.625rem;
//    a {
//      padding: 0.9375rem 1.875rem;
//
//      text-align: center;
//      text-decoration: none;
//      white-space: nowrap;
//      font-size: 1rem;
//      text-transform: uppercase;
//      min-width: auto;
//      border: 1.5px solid;
//      color: ${(props) => props.theme.colors.septenary};
//      background-color: none;
//
//      &:hover {
//        background-color: ${(props) => props.theme.colors.octonary};
//      }
//    }
//    .description {
//      flex: 0 1 100%;
//      padding-block: 9.375rem;
//      padding-left: 6rem;
//      padding-right: 10rem;
//      border-radius: 0.5rem;
//      background-color: ${({ theme }) => theme.colors.tertiary};
//      box-sizing: border-box;
//      h4 {
//        margin-bottom: 2rem;
//        white-space: nowrap;
//      }
//    }
//    .showcase-img {
//      flex: 0 1 100%;
//      display: flex;
//      background-image: url("/showcase-earphones.png");
//      background-repeat: no-repeat;
//      background-size: cover;
//      background-position: center;
//      border-radius: 0.5rem;
//      img {
//        display: none;
//      }
//    }
//  }
//
//  @media only screen and (max-width: 810px) {
//    margin-inline: 2.5rem;
//    .showcase-section-1 {
//      flex-direction: column;
//      background-image: url("/showcase-1-background.png");
//
//      align-items: center;
//      background-position: center;
//      .showcase-img {
//        display: none;
//      }
//
//      .showcase-img-tablet {
//        display: block;
//      }
//      img {
//        margin-bottom: 4rem;
//      }
//      .description {
//        text-align: center;
//        padding-left: 2.5rem;
//        padding-right: 3rem;
//        h1 {
//          text-align: center;
//        }
//        p {
//          text-align: center;
//        }
//      }
//    }
//    .showcase-section-3 {
//      .description {
//        padding: 1rem;
//        padding-block: 5rem;
//      }
//      .showcase-img {
//        object-fit: contain;
//      }
//    }
//  }
//
//  @media only screen and (max-width: 428px) {
//    margin-inline: 1.5rem;
//    .showcase-section-1 {
//      .description {
//        padding: 1.5rem;
//      }
//      br {
//        display: none;
//      }
//    }
//    .showcase-section-2 {
//      .description {
//        padding: 3rem 2rem;
//      }
//    }
//    .showcase-section-3 {
//      flex-direction: column-reverse;
//      .description {
//        padding: 3rem 2rem;
//      }
//      .showcase-img {
//        background-image: none;
//        img {
//          display: block;
//          flex: 1 1 100%;
//          min-width: 0;
//          object-fit: contain;
//          border-radius: 8px;
//        }
//      }
//    }
//  }
//`;
