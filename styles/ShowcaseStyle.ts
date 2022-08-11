import styled from "styled-components";

export const ShowcaseStyle = styled.section`
  width: 90%;
  max-width: 1600px;
  margin: auto;
  .showcase-section-1 {
    display: flex;
    padding-top: 3.125rem;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.colors.primary};
    background-image: url("/showcase-circles.png");
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 0.5rem;
    margin-bottom: 3rem;
    a {
      padding: 0.9375rem 1.875rem;
      text-align: center;
      text-decoration: none;
      white-space: nowrap;
      font-size: 1rem;
      text-transform: uppercase;
      min-width: auto;
      border: none;
      color: ${({ theme }) => theme.colors.senary};
      background-color: ${(props) => props.theme.colors.septenary};

      &:hover {
        background-color: ${(props) => props.theme.colors.octonary};
      }
    }

    .description {
      align-self: center;
      color: ${({ theme }) => theme.colors.quaternary};
      h1 {
        margin-bottom: 1.25rem;
      }
      p {
        margin-bottom: 1.25rem;
      }
    }
  }
  .showcase-img-tablet {
    display: none;
  }
  .showcase-section-2 {
    width: 100%;
    background-image: url("/showcaseBackground.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    max-width: 100%;
    border-radius: 0.5rem;
    a {
      padding: 0.9375rem 1.875rem;
      text-align: center;
      text-decoration: none;
      white-space: nowrap;
      font-size: 1rem;
      text-transform: uppercase;
      min-width: auto;
      border: none;
      color: ${({ theme }) => theme.colors.senary};
      background-color: ${(props) => props.theme.colors.septenary};

      &:hover {
        background-color: ${(props) => props.theme.colors.octonary};
      }
    }
    .description {
      padding: 6.25rem;
      margin-bottom: 6.25rem;
      align-self: center;
      h4 {
        margin-bottom: 2rem;
      }
    }
  }
  .showcase-section-3 {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    justify-content: space-between;
    text-transform: uppercase;
    gap: 0.625rem;
    a {
      padding: 0.9375rem 1.875rem;
      text-align: center;
      text-decoration: none;
      white-space: nowrap;
      font-size: 1rem;
      text-transform: uppercase;
      min-width: auto;
      border: none;
      color: ${({ theme }) => theme.colors.senary};
      background-color: ${(props) => props.theme.colors.septenary};

      &:hover {
        background-color: ${(props) => props.theme.colors.octonary};
      }
    }
    .description {
      flex-basis: 100%;
      flex-shrink: 1;
      align-self: center;
      padding: 9.375rem;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.colors.tertiary};
      h4 {
        margin-bottom: 2rem;
      }
    }
    .showcase-img {
      flex-basis: 100%;
      flex-grow: 1;
      background-image: url("/showcase-earphones.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      border-radius: 0.5rem;
    }
  }
`;
