import React from 'react'
import styled from 'styled-components'

const LargeAdWrapper = styled.div`
height: 6rem;
display: flex;
justify-content: center;
margin: 1.5rem 0 0 0;
@media screen and (max-width: 547px) {
  display: none;
}
`

const SmallAdWrapper = styled.div`
display: initial;
height: 8rem;
display: flex;
justify-content: center;
margin: 1.5rem 0 0 0;
@media screen and (min-width: 547px) {
  display: none;
}
`

const MainAdBanner = () => {
  return (
    <>
      <LargeAdWrapper>
        <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=26&l=ur1&category=computers_accesories&banner=1A31FHFABGK5BV8C1RG2&f=ifr&linkID=be1a7f81074624031a24c679ce436a61&t=codegainz-20&tracking_id=codegainz-20" style={{width:`468px`, height:"60", scrolling:"no", marginWidth:"0", border:"none", frameBorder:"0"}} />
      </LargeAdWrapper>
      <SmallAdWrapper>
      <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=21&l=ur1&category=computers_accesories&banner=0670T4AJ5E0G670B5602&f=ifr&linkID=f86ac658f52a137d9510978cc6a73444&t=codegainz-20&tracking_id=codegainz-20" style={{width:`125px`, height:`125px`, scrolling:"no", marginWidth:"0", border:"none", frameBorder:"0"}} />
      </SmallAdWrapper>
    </>
  )
}
export default MainAdBanner
