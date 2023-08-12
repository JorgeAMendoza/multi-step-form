import { useAppSelector } from '@/src/redux/hooks.tsx'
import PersonalInfo from './PersonalSection/PersonalSection.tsx'
import PlanSection from './PlanSection/PlanSection.tsx'
import AddOnSection from './AddOnSection/AddOnSection.tsx'
import Confirmation from './Confirmation/Confirmation.tsx'
import { FormSection } from './Form.styled.tsx'

const Form = () => {
  const { step } = useAppSelector((state) => state.form)

  return (
    <FormSection>
      {step === 'personalInfo' ? <PersonalInfo /> : null}{' '}
      {step === 'plan' ? <PlanSection /> : null}
      {step === 'addOns' ? <AddOnSection /> : null}
      {step === 'confirmation' ? <Confirmation /> : null}
    </FormSection>
  )
}

export default Form
