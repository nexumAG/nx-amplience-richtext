import React from 'react'
import {
  FormControl,
  FormHelperText,
  InputLabel,
  TextField,
} from '@material-ui/core'

export function Textarea({
  sdk,
  initialData,
  required,
}: {
  sdk: any
  initialData: any
  required: boolean
}) {
  React.useEffect(() => {
    sdk.field.setValue(initialData)
  }, [sdk])

  const handleChange = (ev: React.ChangeEvent<{ value: unknown }>) => {
    sdk.field.setValue(ev.target.value)
  }

  return (
    <FormControl fullWidth required={required}>
      <InputLabel id="textarea-label-id">{sdk.field.schema?.title}</InputLabel>
      <TextField
        rows={3}
        defaultValue={initialData}
        id="textarea-label-id"
        onChange={handleChange}
      />
      <FormHelperText>{sdk.field.schema?.description}</FormHelperText>
    </FormControl>
  )
}
