import React from "react"
import { graphql } from "gatsby"
import MainTemplate from "templates/MainTemplate"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <MainTemplate>
      <div className="container">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </MainTemplate>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`