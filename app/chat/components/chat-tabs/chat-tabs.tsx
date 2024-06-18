'use client'
// Docs:
// https://www.freecodecamp.org/news/build-a-high-performance-tab-component/#the-heart-of-the-tab-component
import { useState, type ReactElement } from 'react'
import { TabButtons } from './tab-buttons'
import TabContent from './tab-content'
import ChatOne from '../chat-one'
import ChatTwo from '../chat-two'

export interface IContentTab {
  reactNode: ReactElement
}
const data: IContentTab[] = [
  {
    reactNode: <ChatOne />
  },
  {
    reactNode: <ChatTwo />
  }
]
const tabNames = ['Chat 1', 'Chat 2']
export default function ChatTabs () {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      <nav className="Tab flex justify-around ">
        <TabButtons tabNames={tabNames} setActiveTab={setActiveTab} activeTab={activeTab}/>
      </nav>
      <TabContent data={data} activeTab={activeTab}/>
    </>
  )
}
