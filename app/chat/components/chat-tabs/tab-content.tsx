import { type IContentTab } from './chat-tabs'

export default function TabContent ({ data, activeTab }: { data: IContentTab[], activeTab: number }) {
  return (
    data[activeTab].reactNode
  )
}
