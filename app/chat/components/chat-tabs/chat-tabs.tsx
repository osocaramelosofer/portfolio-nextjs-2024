'use client'
// Docs:
// https://www.freecodecamp.org/news/build-a-high-performance-tab-component/#the-heart-of-the-tab-component
import { useState, type ReactElement } from 'react'
import { TabButtons } from './tab-buttons'
import TabContent from './tab-content'
import ChatOne from '../chat-one'
import ChatTwo from '../chat-two'
import ChatThree from '../chat-three'

export interface IContentTab {
  reactNode: ReactElement
}
const data: IContentTab[] = [
  {
    reactNode: <ChatOne />
  },
  {
    reactNode: <ChatTwo />
  },
  {
    reactNode: <ChatThree />
  }
]
const tabNames = ['Chat 1', 'Chat 2', 'Chat 3']
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
