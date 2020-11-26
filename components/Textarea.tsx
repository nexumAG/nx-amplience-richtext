import React from 'react'
import {
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from '@material-ui/core'
import { useTranslation } from '../hooks/useTranslate'
import { useLocales } from '../hooks/useLocales'

export function Textarea({
  initialData,
  required,
  sdk,
}: {
  initialData: any
  required: boolean
  sdk: any
}) {
  const { translated, updateTranslated } = useTranslation(initialData)
  useLocales(translated)

  React.useEffect(() => {
    sdk.field.setValue(initialData)
  }, [sdk])

  const handleChange = (locale: any) => (
    ev: React.ChangeEvent<{ value: unknown }>,
  ) => {
    updateTranslated(locale, ev.target.value)
  }

  const { locales } = sdk

  return (
    <FormControl fullWidth>
      <Typography variant="body2" gutterBottom>
        {sdk.field.schema?.title}
      </Typography>
      {locales.available.map(({ locale }: any) => {
        return (
          <React.Fragment key={locale}>
            <TextField
              defaultValue={
                initialData?.values.find((t: any) => t.locale === locale)?.value
              }
              id="textarea-label-id"
              label={`${sdk.field.schema?.title} ${locale}`}
              multiline
              onChange={handleChange(locale)}
              required={required}
              rows={3}
            />
            <FormHelperText>
              {`${sdk.field.schema?.description} ${locale}`}
            </FormHelperText>
          </React.Fragment>
        )
      })}
    </FormControl>
  )
}
