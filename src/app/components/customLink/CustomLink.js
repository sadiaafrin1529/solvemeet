import Link from 'next/link';
import React from 'react'

export default function ({path,children}) {
  return (
    <Link href={path} className="hover:text-blue-500">
      {children}
    </Link>
  );
}
