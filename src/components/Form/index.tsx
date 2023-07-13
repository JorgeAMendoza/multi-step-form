import { useAppSelector } from '@/src/redux/hooks.tsx'
import PersonalInfo from './PersonalSection/PersonalSection.tsx'
import PlanSection from './PlanSection/PlanSection.tsx'
import AddOnSection from './AddOnSection/AddOnSection.tsx'

const Form = () => {
  const { step } = useAppSelector((state) => state.form)

  return (
    <div>
      {step === 'personalInfo' ? <PersonalInfo /> : null}{' '}
      {step === 'plan' ? <PlanSection /> : null}
      {step === 'addOns' ? <AddOnSection /> : null}
    </div>
  )
}

export default Form
