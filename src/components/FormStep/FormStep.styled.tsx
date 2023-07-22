import styled from 'styled-components'
import bgImageMobile from '@/src/assets/images/bg-sidebar-mobile.svg'

console.log(bgImageMobile)

export const FormStepStyled = styled.div`
  min-height: 17.2rem;
  background-image: url(${bgImageMobile});
  background-repeat: no-repeat;
  background-size: cover;
`

export const StepList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  padding: 3.2rem;
`

export const StepItem = styled.li`
  border: 1px solid var(--white);
  border-radius: 50%;
  width: 3.3rem;
  height: 3.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  font-size: 1.4rem;

  p {
    position: relative;
    font-weight: bold;
    line-height: 1;
  }
  p:nth-of-type(1),
  p:nth-of-type(2) {
    display: none;
  }
  p:nth-of-type(3) {
    span {
      position: absolute;
      top: 0;
      left: 0;
      visibility: hidden;
    }
  }

  &[data-active='true'] {
    background-color: var(--sky-blue);
    color: var(--denim);
    border: 1px solid var(--sky-blue);
  }
`
