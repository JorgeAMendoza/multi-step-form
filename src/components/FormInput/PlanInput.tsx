import { UseControllerProps, useController } from 'react-hook-form'
import { PlanForm } from '../Form/PlanSection/PlanSection.tsx'

type PlanInputProps = UseControllerProps<PlanForm> & {
  value: PlanForm['plan']
  children: React.ReactNode
}

const PlanInput = (props: PlanInputProps) => {
  const { field } = useController(props)
  return (
    <div>
      <label>
        <img src="imageSource" alt="plan icon" />
        <input
          {...field}
          value={props.value}
          name={props.name}
          type="radio"
          checked={field.value === props.value ? true : false}
        />
        <p>{props.name}</p>
        <div>{props.children}</div>
      </label>
    </div>
  )
}

export default PlanInput
