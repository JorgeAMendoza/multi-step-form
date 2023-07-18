import { useAppSelector } from '@/src/redux/hooks.tsx'
import style from './form-step.module.css'

const FormStep = () => {
  const { step } = useAppSelector((state) => state.form)
  return (
    <div data-testid="formSteps">
      <ul className={style.stepList}>
        <li data-active={step === 'personalInfo' ? 'true' : 'false'}>
          <p>Step 1</p>
          <p>Your Info</p>
        </li>
        <li data-active={step === 'plan' ? 'true' : 'false'}>
          <p>Step 2</p>
          <p>Select Plan</p>
        </li>
        <li data-active={step === 'addOns' ? 'true' : 'false'}>
          <p>Step 3</p>
          <p>Add-Ons</p>
        </li>
        <li data-active={step === 'confirmation' ? 'true' : 'false'}>
          <p>Step 4</p>
          <p>Summary</p>
        </li>
      </ul>
    </div>
  )
}

export default FormStep
