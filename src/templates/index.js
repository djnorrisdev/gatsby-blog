import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'
import styled from 'styled-components'

const FeaturedTitle = styled.h1`
  font-size: 1.6em;
  margin-bottom: 1em;
`

const RecentPosts = styled.h1`
  font-size: 1.6em;
  margin: 1em 0;
  width: 100%;
`

const Index = ({ data, pageContext }) => {
  
  const posts = data.allContentfulPost.edges
  const featuredPost = posts[0].node
  const { currentPage } = pageContext
  const isFirstPage = currentPage === 1

  return (
    <Layout>
      <SEO />
      {!isFirstPage && (
        <Helmet>
          <title>{`${config.siteTitle} - Page ${currentPage}`}</title>
        </Helmet>
      )}
      
      <Container size='3em 0 2em'>
        
        {isFirstPage ? (
          <CardList>
            <FeaturedTitle>Featured Post</FeaturedTitle>
            <Card {...featuredPost} featured />
            <RecentPosts>Recent Posts</RecentPosts>
            {posts.slice(1).map(({ node: post }) => (
              <Card key={post.id} {...post} />
            ))}
          </CardList>
        ) : (
          <CardList>
            {posts.map(({ node: post }) => (
              <Card key={post.id} {...post} />
            ))}
          </CardList>
        )}
        {/* <CardList>
          {posts.map(({ node: post }) => (
            <Card key={post.id} {...post} />
          ))}
        </CardList> */}
      </Container>
      <Pagination context={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          tags {
            title
          }
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          body {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
    imageOne: file(relativePath: {eq: "close-up-code.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  }
`

export default Index
