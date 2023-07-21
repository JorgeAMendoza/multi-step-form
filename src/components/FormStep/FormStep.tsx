import { useAppSelector } from '@/src/redux/hooks.tsx'
import { StepItem, StepList } from './FormStep.styled'

const FormStep = () => {
  const { step } = useAppSelector((state) => state.form)
  return (
    <div data-testid="formSteps">
      <StepList aria-live="polite">
        <StepItem data-active={step === 'personalInfo' ? 'true' : 'false'}>
          <p>Step 1</p>
          <p>Your Info</p>
          <p>
            1 <span aria-hidden="false">Your Info</span>
          </p>
        </StepItem>
        <StepItem data-active={step === 'plan' ? 'true' : 'false'}>
          <p>Step 2</p>
          <p>Select Plan</p>
          <p>
            2 <span aria-hidden="false">Select Plan</span>
          </p>
        </StepItem>
        <StepItem data-active={step === 'addOns' ? 'true' : 'false'}>
          <p>Step 3</p>
          <p>Add-Ons</p>
          <p>
            3 <span aria-hidden="false">Add-Ons</span>
          </p>
        </StepItem>
        <StepItem data-active={step === 'confirmation' ? 'true' : 'false'}>
          <p>Step 4</p>
          <p>Summary</p>
          <p>
            4 <span aria-hidden="false">Summary</span>
          </p>
        </StepItem>
      </StepList>
    </div>
  )
}

export default FormStep
