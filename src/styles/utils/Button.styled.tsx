import styled from 'styled-components'

export const Button = styled.button`
  background-color: var(--denim);
  border-radius: 4px;
  color: var(--white);
  padding: 0.65em 1.2em;
  font-size: 1.4rem;
  font-weight: 500;
`

export const PreviousButton = styled.button`
  background-color: transparent;
  padding: 0.65em 1.2em;
  border-radius: 4px;
  color: var(--grey);
  font-size: 1.4rem;
  font-weight: 500;
`

export const ButtonFormContainer = styled.div`
  background-color: var(--white);
  display: flex;
  justify-content: flex-end;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1em;
`

export const ButtonFormContainerTwo = styled.div`
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1em;
`
