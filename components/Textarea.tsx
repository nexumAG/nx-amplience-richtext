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
    <FormControl fullWidth>
      <TextField
        rows={3}
        defaultValue={initialData}
        id="textarea-label-id"
        onChange={handleChange}
        multiline
        label={sdk.field.schema?.title}
        variant="outlined"
        required={required}
      />
      <FormHelperText>{sdk.field.schema?.description}</FormHelperText>
    </FormControl>
  )
}
