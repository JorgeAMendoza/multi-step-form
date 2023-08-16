import styled from 'styled-components'
import { FormSection } from '@/src/styles/utils/Form.styled'
import device from '@/src/styles/device'

export const PersonalStyled = styled(FormSection)``

export const PersonalForm = styled.form`
  & > *:not(:last-of-type) {
    margin-block-end: 1.6rem;
  }

  @media screen and (${device.laptop}) {
    & > *:not(:last-of-type) {
      margin-block-end: 2.2rem;
    }
  }
`
