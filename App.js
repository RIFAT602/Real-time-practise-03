import React from 'react'
import Emoji from './Composition/Emoji'
import Text from './Composition/Text'

export default function App() {
  return (
    <Emoji>{({addEmoji})=><Text addEmoji={addEmoji}/>}</Emoji>
  )
}

