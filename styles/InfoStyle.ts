import styled from "styled-components";

export const InfoStyle = styled.div`
  display: flex;
  width: 90%;
  max-width: 1600px;
  margin: auto;
  padding: 9.125rem 0;
  position: relative;
  align-items: center;
  .left {
    padding-top: min(9.125rem, 10vw);
    padding-bottom: min(9.125rem, 5rem);
    padding-right: min(7.8125rem, 5rem);
    text-transform: uppercase;
    flex: 1 1 100%;
    overflow: hidden;
  }
  h2 {
    margin-bottom: 2rem;
  }

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
  .right {
    flex: 1 1 100%;
    min-width: 0;
    margin: auto;
    img {
      object-fit: contain;
      width: 100%;
      max-width: 100%;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    .left {
      text-align: center;
      padding-right: 0;
    }
  }
`;
