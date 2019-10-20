import React from "react"
import styled from '@emotion/styled'


const StyledDesc = styled.div`
text-align: center;
`

interface Props {
  data: any
}

const Offers = (props: Props) => {
    const offers = props.data.edges
  
    return (
   <div>
     {offers.map((offer: any, index: number) => (
       <StyledDesc key={index}>
         <h2>{offer.node.title}</h2>
         <div dangerouslySetInnerHTML={{__html: offer.node.description.childContentfulRichText.html}}/>
         <img src={offer.node.image.file.url} height="420" width="820"/>
         </StyledDesc>
     ))}
   </div>
    )
}

export default Offers