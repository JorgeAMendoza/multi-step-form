import { FormSection } from '@/src/styles/utils/Form.styled'
import styled from 'styled-components'

export const ConfirmationStyled = styled(FormSection)``

export const ConfirmationInfo = styled.div`
  background-color: var(--very-light-grey);
  border-radius: 8px;
  padding: 1em;
`

export const PlanInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--light-grey);
  padding-bottom: 0.7em;

  p:first-of-type {
    display: flex;
    flex-direction: column;
    text-transform: capitalize;
    color: var(--denim);
    font-weight: 500;
    font-size: 1.4rem;

    button {
      align-self: start;
      text-decoration: underline;
      color: var(--grey);
    }
  }

  p:last-of-type {
    font-size: 1.4rem;
    color: var(--denim);
    font-weight: bold;
  }
`

export const AddOnInfo = styled.div`
  margin-block-start: 1rem;
  ul li {
    display: flex;
    justify-content: space-between;

    p:first-of-type {
      color: var(--grey);
      font-size: 1.4rem;
      text-transform: capitalize;
    }

    p:last-of-type {
      color: var(--denim);
      font-weight: 500;
      font-size: 1.4rem;
    }

    &:not(:last-of-type) {
      margin-block-end: 1.2rem;
    }
  }
`
