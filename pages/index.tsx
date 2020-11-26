import { Textarea } from '../components/Textarea'
import { useExtension } from '../hooks/useExtension'
import { createContext } from 'react'
import { SDK } from 'dc-extensions-sdk'

export const SdkContext = createContext<SDK | undefined>(undefined)

export default function Extension() {
  const { sdk, initialData, ready, required } = useExtension()

  if (!sdk || !ready) {
    return <pre>Loading...</pre>
  }

  sdk.frame.startAutoResizer()

  return (
    <SdkContext.Provider value={sdk}>
      <Textarea sdk={sdk} initialData={initialData} required={required} />
    </SdkContext.Provider>
  )
}
