import styled from 'styled-components'
import { FormSection } from '@/src/styles/utils/Form.styled'

export const PlanStyled = styled(FormSection)``

export const PlanForm = styled.form`
  margin-block-start: 2.3rem;

  & > div:nth-of-type(1) > *:not(:last-of-type) {
    margin-block-end: 1.2rem;
  }
`
