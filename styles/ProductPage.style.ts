//import styled from "styled-components";
//
//export const ProductStyle = styled.div`
//  display: flex;
//  flex-direction: column;
//  background-color: ${({ theme }) => theme.colors.secondary};
//  width: 100%;
//  box-sizing: border-box;
//  padding-left: 10%;
//  padding-right: 10%;
//  margin-bottom: 10rem;
//  z-index: -1;
//  .page-title {
//    flex: 1 1 100%;
//    text-transform: uppercase;
//    color: ${({ theme }) => theme.colors.senary};
//    text-align: center;
//    padding-bottom: 6rem;
//    background-color: ${({ theme }) => theme.colors.secondary};
//    h1 {
//      margin: 0;
//      padding-top: 8rem;
//    }
//  }
//`;
//
//export const ProductDescription = styled.div`
//  margin-inline: 10.3rem;
//  div:nth-child(even) {
//    flex-direction: row-reverse;
//    .right {
//      padding-left: 0;
//      padding-right: 7.5rem;
//    }
//  }
//  div:nth-child(3) {
//    margin-bottom: 10rem;
//  }
//
//  .product-wrapper {
//    display: flex;
//    flex-direction: row;
//    max-width: 1600px;
//    margin-left: auto;
//    margin-right: auto;
//    margin-bottom: 3rem;
//    border-radius: 0.5rem;
//    align-items: center;
//
//    .left {
//      flex: 1 1 100%;
//      img {
//        object-fit: contain;
//        max-width: 100%;
//      }
//    }
//    .right {
//      flex: 1 1 100%;
//      padding-left: 7.5rem;
//      h2 {
//        padding-bottom: 1rem;
//        margin: 0;
//        text-transform: uppercase;
//      }
//      p:nth-child(1) {
//        text-transform: uppercase;
//        color: ${({ theme }) => theme.colors.primary};
//      }
//      p {
//        padding-bottom: 1rem;
//        margin: 0;
//        text-transform: capitalize;
//      }
//      .buttons {
//        display: flex;
//        gap: 5%;
//        width: 75%;
//        margin: 0;
//        .counter {
//          color: ${({ theme }) => theme.colors.septenary};
//          background-color: ${({ theme }) => theme.colors.tertiary};
//          text-align: center;
//          white-space: nowrap;
//        }
//      }
//    }
//  }
//
//  @media only screen and (max-width: 810px) {
//    margin-inline: 2.5rem;
//
//    h1 {
//      font-size: 3.5rem;
//    }
//
//    div:nth-child(even) {
//      flex-direction: column;
//      .right {
//        padding-left: 1%;
//        padding-right: 1%;
//        text-align: center;
//      }
//    }
//    .product-wrapper {
//      flex-direction: column;
//      justify-items: center;
//      .right {
//        padding-left: 1%;
//        padding-right: 1%;
//        text-align: center;
//      }
//      .left {
//        margin-bottom: 3rem;
//      }
//    }
//  }
//
//  @media only screen and (max-width: 428px) {
//    margin-inline: 1.5rem;
//  }
//`;
