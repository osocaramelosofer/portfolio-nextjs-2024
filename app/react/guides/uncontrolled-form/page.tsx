'use client'
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackFileExplorer,
  type SandpackFile
} from '@codesandbox/sandpack-react'
export default function UncontrolledFormPage() {
  const files: SandpackFile[] = [
    {
      code: 'hola mundo',
      hidden: false,
      active: true,
      readOnly: true
    },
    {
      code: 'adios mundo',
      hidden: false,
      active: true,
      readOnly: true
    }
  ]
  return (
    <div>
      <h1>Uncontrolled Form</h1>
      <SandpackProvider
        template="react"
        theme="dark"
        files={{
          '/app': files[0],
          '/test': files[1]
        }}
      >
        <SandpackLayout>
          <SandpackFileExplorer />
          <SandpackCodeEditor />
          <SandpackPreview />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  )
}
