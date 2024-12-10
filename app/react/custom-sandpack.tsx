'use client'
import {
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
  SandpackCodeEditor,
  type SandpackFiles
} from '@codesandbox/sandpack-react'

const DEFAULT_FILES: SandpackFiles = {
  '/Wrapper.js': {
    code: `export default () => "";`,
    active: false
  },
  '/Button.js': {
    code: `export default () => {return <button>Hello</button>
      };`,
    readOnly: true, // Set as non-editable, defaults to `false`
    active: true, // Set as main file, defaults to `false`
    hidden: false // Tab visibility, defaults to `false`
  }
}
export interface CustomSandpackProps {
  files?: SandpackFiles
}
export default function CustomSandpack({
  files = DEFAULT_FILES
}: CustomSandpackProps) {
  return (
    <SandpackProvider theme="dark" template="react" files={files}>
      <SandpackLayout style={{ height: '90dvh' }}>
        <SandpackCodeEditor
          wrapContent={false}
          style={{ height: '100%' }}
          showTabs
          closableTabs
          showLineNumbers={true}
        />

        <SandpackPreview style={{ height: '100%' }} />
      </SandpackLayout>
    </SandpackProvider>
  )
}
