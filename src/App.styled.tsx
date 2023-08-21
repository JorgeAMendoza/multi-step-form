import styled from 'styled-components'
import device from './styles/device'

export const FormContainer = styled.div`
  @media screen and (${device.laptop}) {
    background-color: var(--white);
    display: grid;
    grid-template-columns: 1fr 2.3fr;
    width: 94rem;
    height: 60rem;
    padding: 1em;
    border-radius: 15px;
  }
`
