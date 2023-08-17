import { FormSection } from '@/src/styles/utils/Form.styled'
import styled from 'styled-components'
import device from '@/src/styles/device'

export const AddOnsStyled = styled(FormSection)``

export const AddOnsForm = styled.form`
  & > *:not(:last-of-type) {
    margin-block-end: 1.2rem;
  }

  @media screen and (${device.laptop}) {
    & > *:not(:last-of-type) {
      margin-block-end: 1.3rem;
    }
  }
`
