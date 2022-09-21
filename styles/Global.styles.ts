import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
scrollbar-width: none;
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;
    overflow-x: hidden;
    h1 {
      font-size: 3.5rem; //56px
  line-height: 3.625rem;
  font-weight: bold;
  letter-spacing: 0.125rem;
  @media only screen and (max-width: 768px) {
    line-height: 4rem;
  }
  @media only screen and (max-width: 568px) {
    font-size: 2.25rem; //36px
    line-height: normal;
  }
    }
    h2{
    font-size: 2.5rem; //40px
    line-height: 2.75rem;
    font-weight: bold;
    letter-spacing: 0.09375rem;
    }
    h3{
    font-size: 2rem;
    line-height: 2.25rem;
    font-weight: bold;
    letter-spacing: 0.09375rem;
    }
    h4{
    font-size: 1.75rem;
    line-height: 2.375rem;
    font-weight: bold;
    letter-spacing: 0.09375rem;
    }
    h5{
    font-size: 1.5rem;
    line-height: 2.0625rem;
    font-weight: bold;
    letter-spacing: 0.09375rem;
    }
    h6{
   font-size: 1.125rem;
   line-height: 1.5rem;
   font-weight: bold;
   letter-spacing: 0.09375rem;
    }
    p{
    font-size: 0.9375rem;
    line-height: 1.5625rem;
    }
  }
`;
