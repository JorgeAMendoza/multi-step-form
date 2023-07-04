import PlanInput from '../FormInput/PlanInput.tsx'
import PlanType from '../FormInput/PlanType.tsx'

const PlanSection = () => {
  return (
    <div>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>

      <form>
        <div>
          <PlanInput />
          <PlanInput />
          <PlanInput />
        </div>

        <div>
          <PlanType />
        </div>
      </form>

      <div>
        <button type="button">Go Back</button>
        <button type="button">Next</button>
      </div>
    </div>
  )
}

export default PlanSection
