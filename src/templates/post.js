import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import TagList from '../components/TagList'
import PostLinks from '../components/PostLinks'
import PostDate from '../components/PostDate'
import SEO from '../components/SEO'
import styled from 'styled-components'

const FrameWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 4rem 0;
`

const PostTemplate = ({ data, pageContext }) => {
  const {
    title,
    slug,
    asins,
    linkId,
    heroImage,
    body,
    publishDate,
    tags,
  } = data.contentfulPost
  const postNode = data.contentfulPost
  const previous = pageContext.prev
  const next = pageContext.next
  const asin = asins
  const link = linkId

  const handleAds = () => {
    return asin.map((item, i) => {
      const src = `//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=codegainz-20&marketplace=amazon&region=US&placement=${
        asin[i]
      }&asins=${asin[i]}&linkId=${
        link[i]
      }&show_border=true&link_opens_in_new_window=true`
      return (
        <iframe
          key={i}
          src={src}
          style={{
            width: `120px`,
            height: `240px`,
            scrolling: `no`,
            frameBorder: `0`,
          }}
        />
      )
    })
  }

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO />

      <Hero title={title} image={heroImage} height={'50vh'} />

      <Container>
        {tags && <TagList tags={tags} />}
        <PostDate date={publishDate} />
        <PageBody body={body} />
        <FrameWrapper>{handleAds()}</FrameWrapper>
      </Container>
      <PostLinks previous={previous} next={next} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      asins
      linkId
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      tags {
        title
        id
        slug
      }
      heroImage {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default PostTemplate
