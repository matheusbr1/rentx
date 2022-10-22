import React from 'react'
import ReactCarousel from 'better-react-carousel'
import styled from 'styled-components'
import { pxToRem } from '../../../../styles/utils/pxToRem'
import { CarImage } from '../../List'

const CarouselImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`

interface StylesCarouselDotProps {
  isActive: boolean
}

const CarouselDot = styled.span<StylesCarouselDotProps>`
  display: inline-block;
  height: ${props => props.isActive ? pxToRem(12) : pxToRem(8)};
  width: ${props => props.isActive ? pxToRem(12) : pxToRem(8)};
  border-radius: 100%;
  background: ${props => props.isActive 
    ? props.theme.colors.gray[600] 
    : props.theme.colors.gray[300] 
  };
`

export interface CarouselProps {
  images: CarImage[]
}

const Carousel: React.FC<CarouselProps> = ({ images = [] }) => (
  <ReactCarousel 
    cols={1} 
    rows={1} 
    gap={10} 
    loop 
    autoplay
    showDots
    dot={CarouselDot}
  >
    {images.map(image => (
      <ReactCarousel.Item key={image.id} >
        <CarouselImageWrapper>
          <img width="85%" src={image.image_URL} />
        </CarouselImageWrapper>
      </ReactCarousel.Item>
    ))}
  </ReactCarousel>
)

export { Carousel }