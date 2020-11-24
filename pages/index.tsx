import { useExtension } from '../hooks/useExtension'
import { Textarea } from '../components/Textarea'

export default function Extension() {
  const { sdk, initialData, ready, required } = useExtension()

  if (!sdk || !ready) {
    return <pre>Loading...</pre>
  }

  sdk.frame.startAutoResizer()

  return <Textarea sdk={sdk} initialData={initialData} required={required} />
}
