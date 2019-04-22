import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import PageBody from '../components/PageBody'
import SEO from '../components/SEO'
import Img from "gatsby-image"
import styled from 'styled-components/macro'

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  & div.gatsby-image-wrapper {
    border-radius: 7px;
  }
`

const PageTemplate = ({ data }) => {
  const { title, slug, body } = data.contentfulPage
  const postNode = data.contentfulPage
  const imgData = data.allContentfulAsset.edges[0].node

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} pageSEO />

      <Container>
        <PageTitle>{title}</PageTitle>
        <ImgWrapper>
          <Img fixed={imgData.fixed}/>
        </ImgWrapper>
        <PageBody body={body} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
    allContentfulAsset (filter: {title: {eq: "me-2-min"}}) {
    edges {
      node {
        title
            fixed(width: 250) {
            width
            height
            src
            srcSet
            srcWebp
            srcSetWebp
          }
      }
    }
  }
  }
`

export default PageTemplate
