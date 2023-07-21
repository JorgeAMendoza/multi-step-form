import styled from 'styled-components'

export const FormStepStyled = styled.div``

export const StepList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const StepItem = styled.li`
  p {
    position: relative;
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
`
