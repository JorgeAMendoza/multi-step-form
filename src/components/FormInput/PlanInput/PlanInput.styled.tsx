import device from '@/src/styles/device'
import styled from 'styled-components'

interface PlanInputStyledProps {
  checked: boolean
}

export const PlanInputStyled = styled.div<PlanInputStyledProps>`
  position: relative;
  border: ${({ checked }) =>
    checked ? '1px solid var(--purple)' : '1px solid var(--light-grey)'};
  background-color: ${({ checked }) =>
    checked ? 'var(--very-light-grey)' : 'var(--white)'};
  border-radius: 8px;
  padding: 0.9em 0.9em;
  flex: 1;

  &:hover{
    border: 1px solid var(--purple);
    
  }
`

export const PlanLabel = styled.label`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    'image name'
    'image price'
    'image savings';
  cursor: pointer;

  input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  img {
    grid-area: image;
    margin-top: 0.2rem;
  }

  span:nth-of-type(1) {
    grid-area: name;
    font-weight: bold;
    text-transform: capitalize;
    color: var(--denim);
    margin-top: -0.5rem;
  }

  span:nth-of-type(2) {
    grid-area: price;
    font-size: 1.4rem;
    color: var(--grey);
    margin-top: 0.5rem;
  }

  span:nth-of-type(3) {
    grid-area: savings;
    font-size: 1.2rem;
    margin-top: 0.3rem;
  }

  span:nth-of-type(1),
  span:nth-of-type(2),
  span:nth-of-type(3) {
    margin-left: 1.3rem;
  }

  @media screen and (${device.laptop}) {
    display: block;
    height: 100%;

    span:nth-of-type(1),
    span:nth-of-type(2),
    span:nth-of-type(3) {
      margin-left: 0;
      display: block;
      margin-top: 0;
    }

    span:nth-of-type(1) {
      margin-block-start: 4rem;
    }
  }
`
