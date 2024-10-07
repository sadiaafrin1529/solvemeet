import React from 'react'

export default function Title({title,icon}) {
  return (
      <h2 className="font-medium tracking-tight text-gray-900">{icon} { title}</h2>
  )
}
