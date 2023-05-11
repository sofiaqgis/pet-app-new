import React from 'react'
import { Img, ImgWrapper, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img width='100%' src={DEFAULT_IMAGE} alt='PhotoCard' />
        </ImgWrapper>
      </a>
      <Button>
        <MdFavoriteBorder size='32px' />{likes} likes!
      </Button>
    </article>
  )
}
