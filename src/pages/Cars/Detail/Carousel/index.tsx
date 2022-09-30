import React from 'react'
import ReactCarousel from 'better-react-carousel'
import styled from 'styled-components'
import { pxToRem } from '../../../../styles/utils/pxToRem'

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

interface CarouselProps {
  images: string[]
}

const Carousel: React.FC<CarouselProps> = ({ images }) => (
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
      <ReactCarousel.Item>
        <CarouselImageWrapper>
          <img width="85%" src={image} />
        </CarouselImageWrapper>
      </ReactCarousel.Item>
    ))}
  </ReactCarousel>
)

export { Carousel }