/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'
import { type SetStateAction, type Dispatch } from 'react'

export function TabButtons (
  { tabNames, setActiveTab, activeTab }:
  { tabNames: string[], setActiveTab: Dispatch<SetStateAction<number>>, activeTab: number }
) {
  const onClickTab = (idx: number) => {
    setActiveTab(idx)
  }
  return (
    <>
    {tabNames.map((tab, idx) => (
      <button
        key={idx}
        id="buttonRef"
        className={`
            bg-[#fff] px-2 py-1 rounded-t-md
            ${activeTab === idx && 'bg-blue-400'}
        `}
        onClick={() => { onClickTab(idx) }}
      >
        {tab}
      </button>
    ))}
    </>
  )
}
