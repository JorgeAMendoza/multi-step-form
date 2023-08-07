import styled from 'styled-components'

interface AddOnInputStyledProps {
  checked: boolean
}

export const AddOnInputStyled = styled.label<AddOnInputStyledProps>`
  min-height: 6.2rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas:
    'check name price'
    'check desc price';
  border: ${({ checked }) =>
    checked ? '1px solid var(--purple)' : '1px solid var(--light-grey)'};
  background-color: ${({ checked }) =>
    checked ? 'var(--very-light-grey)' : 'var(--white)'};
  border-radius: 8px;
  padding: 0em 1em;

  & > span:first-of-type {
    grid-area: check;
    align-self: center;
    width: 2rem;
    aspect-ratio: 1/1;
    position: relative;
    border-radius: 4px;

    input {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
    }

    span {
      width: 2rem;
      min-height: 2rem;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 4px;
      border: 1px solid var(--light-grey);
    }

    span:before {
      content: '';
      position: absolute;
      left: 6px;
      top: 5px;
      width: 10px;
      height: 6px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: scaleX(-1) rotate(45deg);
    }

    input:checked + span {
      background-color: var(--purple);
      border: none;
    }

    input:checked + span:before {
      display: block;
    }
  }

  /* title */
  & > span:nth-of-type(2) {
    grid-area: name;
    align-self: end;
    color: var(--denim);
    font-weight: bold;
    font-size: 1.4rem;
  }

  /* description */
  & > span:nth-of-type(3) {
    grid-area: desc;
    color: var(--grey);
    font-size: 1.2rem;
  }

  /*  */
  & > span:nth-of-type(4) {
    grid-area: price;
    align-self: center;
    color: var(--purple);
    font-size: 1.2rem;
  }

  & > span:nth-of-type(2),
  & > span:nth-of-type(3) {
    margin-left: 1.3rem;
  }
`
