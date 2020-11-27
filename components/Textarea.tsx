import React from 'react'
import {
  Box,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core'
import { useTranslation } from '../hooks/useTranslate'
import { useLocales } from '../hooks/useLocales'

const StyledTitle = withStyles({
  root: {
    color: '#666666',
    fontSize: '13px',
    marginBottom: '0.5rem',
  },
})(Typography)

const CssTextField = withStyles({
  root: {
    width: '100%',
    '& .MuiInputBase-inputMultiline': {
      fontSize: '13px',
    },
    '& label': {
      fontSize: '13px',
    },
    '& label.Mui-focused': {
      color: '#666666',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#039be5',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#039be5',
      },
    },
  },
})(TextField)

const CssBox = withStyles({
  root: {
    marginBottom: '0.5rem',
    width: '100%',
    '&:last-child': { marginBottom: '0' },
  },
})(Box)

const CssFormHelperText = withStyles({
  root: {
    fontSize: '11px',
  },
})(FormHelperText)

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
      <StyledTitle variant="body2" gutterBottom>
        {sdk.field.schema?.title}
      </StyledTitle>
      {locales.available.map(({ locale }: any) => {
        return (
          <CssBox key={locale}>
            <CssTextField
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
            <CssFormHelperText>
              {`${sdk.field.schema?.description} ${locale}`}
            </CssFormHelperText>
          </CssBox>
        )
      })}
    </FormControl>
  )
}
