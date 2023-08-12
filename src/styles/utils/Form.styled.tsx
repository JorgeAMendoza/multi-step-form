import styled from 'styled-components'
import { Container } from './Container.styled'

export const FormSection = styled.section`
  height: calc(100svh - 9.9rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${Container} {
    background-color: var(--white);
    width: min(92%, 52rem);
    border-radius: 10px;
    padding: 1.8em 1.6em;
    margin-block-end: 2.7rem;
    box-shadow: 0 25px 50px -20px rgba(0, 0, 0, 0.1);

    h2 {
      color: var(--denim);
      font-size: 2.4rem;
    }

    & > p {
      color: var(--grey);
      font-size: 1.6rem;
      margin-block-start: 0.35em;
      line-height: 1.5;
      margin-block-end: 2.2rem;
    }
  }
`
