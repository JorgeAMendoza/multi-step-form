import styled from 'styled-components'
import { Container } from './Container.styled'

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  ${Container} {
    background-color: var(--white);
    border-radius: 10px;
    padding: 1.8em 1.6em;
    transform: translateY(-7.3rem);

    h2 {
      color: var(--denim);
      font-size: 2.4rem;
    }

    p {
      color: var(--grey);
      font-size: 1.6rem;
      margin-block-start: 0.35em;
      line-height: 1.5;
    }
  }
`
