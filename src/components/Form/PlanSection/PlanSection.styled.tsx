import styled from 'styled-components'
import { FormSection } from '@/src/styles/utils/Form.styled'

export const PlanStyled = styled(FormSection)``

export const PlanForm = styled.form`
  & > div:nth-of-type(1) > *:not(:last-of-type) {
    margin-block-end: 1.3rem;
  }
`

export const SubscriptionType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.3rem;
  margin-block-start: 2.3rem;
  background-color: var(--very-light-grey);
  border-radius: 8px;
  padding: 0.6em 0;
`
interface SubscriptionTypeToggleProps {
  monthly: boolean
}

export const SubscriptionTypeToggle = styled.div<SubscriptionTypeToggleProps>`
  width: 3.8rem;
  height: 2rem;
  position: relative;
  background-color: var(--denim);
  border-radius: 10px;
  margin-block-start: .9rem;

  span {
    position: absolute;
    top: 50%;
    left: 0;
    width: 1.2rem;
    aspect-ratio: 1/1;
    background-color: var(--white);
    border-radius: 100%;
    transform: ${({ monthly }) =>
      monthly ? 'translate(30%, -50%)' : 'translate(180%, -50%)'};
    transition: transform 0.3s ease-in-out;
  }
`
