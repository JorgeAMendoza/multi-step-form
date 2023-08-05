import styled from 'styled-components'

export const PlanTypeInputStyled = styled.div``

interface SubscriptionLabelProps {
  checked: boolean
}

export const SubscriptionLabel = styled.label<SubscriptionLabelProps>`
  color: ${({ checked }) => (checked ? 'var(--denim)' : 'var(--grey)')};
  font-weight: 500;
  font-size: 1.4rem;
  text-transform: capitalize;
  position: relative;
  transition: color 0.3s ease-in-out;
  input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
`
