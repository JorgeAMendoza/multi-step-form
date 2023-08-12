import { Container } from '@/src/styles/utils/Container.styled'
import { FormSection } from '@/src/styles/utils/Form.styled'
import styled, { keyframes } from 'styled-components'

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

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block-start: 2.2rem;
  padding: 0 1em;

  p:first-of-type {
    font-size: 1.4rem;
    color: var(--grey);
  }

  p:last-of-type {
    color: var(--purple);
    font-weight: bold;
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
export const ConfirmingFormStyled = styled(ConfirmationStyled)`
  ${Container} {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div {
      width: 50%;
      aspect-ratio: 1/1;
      margin: 5rem auto;
      border: 5px solid var(--white);
      border-bottom: 5px solid var(--purple);
      border-radius: 50%;
      animation: ${rotate} 1s linear infinite;
    }
  }
`

export const SubmissionStyled = styled(ConfirmationStyled)`
  ${Container} {
    text-align: center;
    padding: 5em 1em;
    img {
      width: 5.6rem;
      aspect-ratio: 1/1;
      margin: 0 auto;

      margin-block-end: 2.2rem;
    }
    p {
      margin: 0;
      margin-block-end: 2rem;
    }

    button {
      font-weight: bold;
      color: var(--purple);
    }
  }
`
