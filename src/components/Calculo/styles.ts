import styled from "styled-components";

export const Container = styled.main``;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  text-align: center;

  form {
    display: grid;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    color: var(--text-title);

    div {
      display: grid;
      font-weight: 600;

      input {
        padding: 1rem 0;
        font-size: 1.3rem;
        text-align: center;
        margin-top: 1rem;
        border: none;
        border-radius: 0.25rem;
        background: var(--text-body);
      }
    }

    button {
      padding: 1rem 0;
      background: var(--blue-light);
      border: none;
      border-radius: 0.25rem;
      color: #fff;
      font-weight: 600;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  h1 {
    margin-top: 1rem;
    padding: 1rem 0rem;
  }
`;
