/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';
import { useState } from 'react';
import { streamComponent } from '@/app/actions/streamingComponents';

export default function ChatThree() {
  const [component, setComponent] = useState<React.ReactNode>();

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setComponent(await streamComponent());
        }}
      >
        <button>Stream Component</button>
      </form>
      <div>{component}</div>
    </div>
  );
}
