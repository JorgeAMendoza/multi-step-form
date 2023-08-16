import device from '@/src/styles/device'
import styled from 'styled-components'

export const FormSection = styled.section`
  transform: translateY(-7.3rem);
  height: calc(100vh - 17.5rem);
  height: calc(100svh - 17.5rem);

  @media screen and (${device.laptop}) {
    transform: translateY(0);
    height: fit-content;
    background-color: var(--white);
  }
`
