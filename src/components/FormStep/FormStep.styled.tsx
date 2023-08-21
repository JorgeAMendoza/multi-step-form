import styled from 'styled-components'
import bgImageMobile from '@/src/assets/images/bg-sidebar-mobile.svg'
import bgImageDesktop from '@/src/assets/images/bg-sidebar-desktop.svg'
import device from '@/src/styles/device'

console.log(bgImageDesktop)

export const FormStepStyled = styled.div`
  min-height: 17.2rem;
  background-image: url(${bgImageMobile});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (${device.laptop}) {
    background-image: url(${bgImageDesktop});
    background-repeat: no-repeat;
    background-size: cover;
    min-height: fit-content;
    background-position: center;
    border-radius: 10px;
  }
`

export const StepList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  padding: 3.2rem;

  @media screen and (${device.laptop}) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 4rem;
    gap: 3.2rem;
  }
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
  position: relative;

  & > div {
    display: none;
  }

  p {
    position: relative;
    font-weight: bold;
    line-height: 1;
  }

  & > p {
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

  @media screen and (${device.laptop}) {
    & > div {
      display: flex;
      flex-direction: column;
      position: absolute;
      width: 11rem;
      left: 4.8rem;
      gap: .6rem;
    }

    & > div p:first-of-type {
      font-size: 1.2rem;
      color: var(--light-blue);
      font-weight: 400;
      text-transform: uppercase;
    }

    & > div p:last-of-type {
      font-size: 1.4rem;
      color: var(--white);
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    & > p span {
      display: none;
    }
  }
`
