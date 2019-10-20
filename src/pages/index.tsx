import React from "react"
import { graphql } from "gatsby"
import Offers from '../components/offer/offer'
import { SiteLayout, NavBar, Button, NavBarIcon } from '@dfds-ui/react-components';
import Terms from "../components/Terms/Terms";
import { Close } from '@dfds-ui/icons'
import styled from "@emotion/styled";


export const pageQuery = graphql`
query ArticleQuery
{
  allContentfulArticle{
    edges {
      node {
        title
      	description {
          childContentfulRichText {html}
      	} 
        createdDate
      }
    }
  }
  allContentfulOffer{
    edges {
      node {
        title
        image {
          file{
            url
          }
        }
      	description {
          childContentfulRichText{html}
      	}
      }
    }
  }
  allContentfulText{
    edges {
      node{
        title
       	content {
       	  childContentfulRichText{html}
       	}
        
    	}
    }
  }
  allContentfulWifiPortal{edges {
    node {
      title
      subtitle
      connectButton
      termsText{childContentfulRichText{html}}
    }
  }}
}
  `

const Layout = styled.div`
    width: 375px;
    height: 440px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    
    background: white;

`

const ContentContainer = styled.div`
padding: 1rem;
overflow-y: scroll;
overflow-x: hidden;
`

const IndexPage = ({ data }: any) => {
  const content = data.allContentfulWifiPortal.edges[0].node

  return (
    <Layout>
       <NavBar showLogo= {true}>
       </NavBar>
     <ContentContainer>
       <Terms terms={data.allContentfulText}></Terms>
    {/* <Offers data={data.allContentfulOffer}></Offers> */}

    <h1>{content.title}</h1>
<p>{content.subtitle}</p>

<div dangerouslySetInnerHTML={{__html: content.termsText.childContentfulRichText.html}}  />

<Button variation="primary" fillWidth={true}>{content.connectButton}</Button>
</ContentContainer>
    </Layout>
    
  )
 }


export default IndexPage
