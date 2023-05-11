import React from 'react'
import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/NM7WAgs.jpeg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => {
  return (
    <Anchor href={path}>
      <Image src={cover} alt='cover' />
      {emoji}
    </Anchor>
  )
}
