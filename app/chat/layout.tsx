import React from 'react';

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="w-full h-full">{children}</main>;
}
