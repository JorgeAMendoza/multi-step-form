import styled from 'styled-components'
import { FormSection } from '@/src/styles/utils/Form.styled'

export const PersonalStyled = styled(FormSection)``

export const PersonalForm = styled.form`
  margin-block-start: 2.1rem;

  & > *:not(:last-of-type) {
    margin-block-end: 1.6rem;
  }
`
