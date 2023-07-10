import { UseControllerProps, useController } from 'react-hook-form'
import { PlanForm } from '../Form/PlanSection/PlanSection.tsx'

type PlanInputProps = UseControllerProps<PlanForm> & {
  value: PlanForm['plan']
}

const PlanInput = (props: PlanInputProps) => {
  const { field, fieldState } = useController(props)
  return (
    <div>
      <label>
        <img src="imageSource" alt="plan icon" />
        <input {...field} value={props.value} name={props.name} />
        <p>{props.name}</p>
        <p>plan price</p>
      </label>
    </div>
  )
}

export default PlanInput
