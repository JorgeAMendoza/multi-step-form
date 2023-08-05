import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 4px;
  color: var(--grey);
  padding: 0.65em 1.2em;
  font-size: 1.4rem;
  font-weight: 500;
`

export const NextButton = styled(Button)`
  background-color: var(--denim);
  color: var(--white);
`

export const PreviousButton = styled(Button)`
  background-color: transparent;
  color: var(--grey);
`

export const ButtonFormContainer = styled.div`
  background-color: var(--white);
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 1em;
`

export const ButtonFormContainerTwo = styled.div`
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1em 1em 1em 0em;
`
