import styled from 'styled-components'
import device from '@/src/styles/device'

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

  @media screen and (${device.laptop}) {
    font-size: 1.4rem;

    label {
      margin-block-end: 0.4rem;
    }
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
    border: ${({ isInvalid }) =>
      isInvalid ? '1px solid var(--error-red)' : '1px solid var(--grey)'};
    border-radius: 4px;
    padding: 0.7em 1em;
  }

  input::placeholder {
    color: var(--grey);
  }

  input:focus {
    border: 1px solid var(--purple);
  }

  @media screen and (${device.laptop}) {
    input {
      border-radius: 8px;
      font-size: 1.6rem;
      padding: 0.9em 1em;
    }
  }
`
