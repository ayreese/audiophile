import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scrollbar-width: none;

}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;
    overflow-x: hidden;
    .homeProductTitle {
    font-size: 3.5rem; 
    line-height: 3.625rem;
    font-weight: 700;
    letter-spacing: 0.125rem;
    margin-bottom: 1.5rem;
    }

.sectionTitle{
    font-size: 2.5rem; 
    line-height: 2.75rem;
    font-weight: 700;
    letter-spacing: 0.09375rem;
    margin-bottom: 1.5rem;
    }
    p {
    font-size: 0.9375rem;
    line-height: 1.5625rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }
  .newProductTitle {
      letter-spacing: 10px;
    }

  @media only screen and (max-width: 810px) {
      .homeProductTitle {
      line-height: 4rem;
      }
      .sectionTitle {
        line-height: 4rem;
      }
  }


  @media only screen and (max-width: 428px) {
      .homeProductTitle {
        font-size: 1.75rem; 
        line-height: normal;
      }
      .sectionTitle {
        font-size: 1.75rem; 
        line-height: normal;
      }
}
}


`;
