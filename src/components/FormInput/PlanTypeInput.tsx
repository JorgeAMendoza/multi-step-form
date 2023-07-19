import { UseControllerProps, useController } from 'react-hook-form'
import type { PlanForm } from '../Form/PlanSection/PlanSection.tsx'

type PlanTypeInputProps = UseControllerProps<PlanForm> & {
  value: PlanForm['subscription']
}

const PlanTypeInput = (props: PlanTypeInputProps) => {
  const { field } = useController(props)
  return (
    <div data-testid={`${props.value}SubInput`}>
      <label>
        {props.value}
        <input
          {...field}
          type="radio"
          name="subscription"
          value={props.value}
          checked={field.value === props.value ? true : false}
        />
      </label>
    </div>
  )
}

export default PlanTypeInput
