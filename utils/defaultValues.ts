export function defaultValues(locales: any, initalValue: any) {
  const values = locales.reduce((acc: any, value: any) => {
    if (initalValue && initalValue.values && initalValue.values.length) {
      const text =
        initalValue.values.find(({ locale }: any) => value.locale === locale) ||
        ''

      return Object.assign(acc, { [value.locale]: text.value })
    }

    return Object.assign(acc, { [value.locale]: '' })
  }, {})

  return values
}
