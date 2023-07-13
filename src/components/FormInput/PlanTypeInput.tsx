import { UseControllerProps, useController } from 'react-hook-form'
import type { PlanForm } from '../Form/PlanSection/PlanSection.tsx'

type PlanTypeInputProps = UseControllerProps<PlanForm> & {
  value: PlanForm['subscription']
}

const PlanTypeInput = (props: PlanTypeInputProps) => {
  const { field } = useController(props)
  return (
    <div>
      <label>
        {props.value}
        <input
          {...field}
          type="radio"
          name="subscription"
          value={props.value}
        />
      </label>
    </div>
  )
}

export default PlanTypeInput
