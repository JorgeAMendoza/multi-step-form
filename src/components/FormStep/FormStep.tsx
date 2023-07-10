import { useAppSelector } from '@/src/redux/hooks.tsx'
import { FormStep } from '@/src/types/redux.ts'
import style from './form-step.module.css'

const FormStep = () => {
  const { step } = useAppSelector((state) => state.form)
  return (
    <div>
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
          <p>Add-ons</p>
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
