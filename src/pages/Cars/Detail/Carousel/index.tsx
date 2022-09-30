import React from 'react'
import ReactCarousel from 'better-react-carousel'
import styled from 'styled-components'

const CarouselImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`

interface CarouselProps {
  images: string[]
}

const Carousel: React.FC<CarouselProps> = ({ images }) => (
  <ReactCarousel cols={1} rows={1} gap={10} loop >
    {images.map(image => (
      <ReactCarousel.Item>
        <CarouselImageWrapper>
          <img width="85%" src={image} />
        </CarouselImageWrapper>
      </ReactCarousel.Item>
    ))}
  </ReactCarousel>
)

export { Carousel }