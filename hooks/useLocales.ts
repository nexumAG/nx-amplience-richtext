import { SdkContext } from '../pages'
import { useEffect, useContext, useCallback } from 'react'

const schema =
  'http://bigcontent.io/cms/schema/v1/core#/definitions/localized-value'

export function useLocales(translated: any) {
  const sdk = useContext(SdkContext)
  const { field }: any = sdk

  const setValue = useCallback(async () => {
    if (!translated) return

    const values = Object.keys(translated).map((locale) => ({
      locale,
      value: translated[locale],
    }))

    try {
      const data = {
        values,
        _meta: {
          schema,
        },
      }
      await field.setValue(data)
    } catch (e) {
      console.log('Unable to set value')
    }
  }, [field, translated])

  useEffect(() => {
    setValue()
  }, [translated, setValue])
}
