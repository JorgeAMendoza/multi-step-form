import styled from 'styled-components'

export const PlanTypeInputStyled = styled.div``

export const SubscriptionLabel = styled.label`
  color: var(--denim);
  font-weight: 500;
  font-size: 1.4rem;
  text-transform: capitalize;
  position: relative;
  input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
`
