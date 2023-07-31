import styled from 'styled-components'

export const TextInputStyled = styled.div``

export const InputName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;

  label {
    color: var(--denim);
    text-transform: capitalize;
  }

  span {
    color: var(--error-red);
    font-weight: bold;
  }
`

interface InputContainerProps {
  isInvalid: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
  input {
    width: 100%;
    height: 100%;
    color: var(--denim);
    font-weight: 500;
    font-size: 1.5rem;
    background-color: transparent;
    outline: transparent;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    padding: 0.7em 1em;
  }

  input::placeholder {
    color: var(--grey);
  }
`
