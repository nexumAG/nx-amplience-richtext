import { useState, useContext } from 'react'
import { defaultValues } from '../utils/defaultValues'
import { SdkContext } from '../pages'

export function useTranslation(initalValue: any) {
  const sdk = useContext(SdkContext)

  const { locales }: any = sdk
  const { available: availableLocales } = locales

  const [translated, setTranslated] = useState(
    defaultValues(availableLocales, initalValue),
  )

  function updateTranslated(locale: any, value: any) {
    setTranslated({ ...translated, [locale]: value })
  }

  return {
    translated,
    updateTranslated,
  }
}
