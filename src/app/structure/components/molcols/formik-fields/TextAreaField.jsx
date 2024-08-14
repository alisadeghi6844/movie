import TextArea from "../../textArea"
import { useField } from "formik"

const TextAreaField = (props) => {
  const { label, required, className, ...rest } = props
  const [field, { error }] = useField(rest)
  return (
    <TextArea
      errorMessage={error}
      required={required}
      label={label}
      className={className}
      {...field}
      {...rest}
    />
  )
}

export default TextAreaField
