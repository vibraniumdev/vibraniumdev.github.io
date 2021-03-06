import React from "react"
import { StaticQuery, graphql } from "gatsby"
import * as S from "./landing-bio.styles"

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={(data) => (
      <S.OuterContainer>
        <S.Container>
          <S.NameHeader>{data.site.siteMetadata.title}</S.NameHeader>
          <S.Description>{data.site.siteMetadata.subtitle}</S.Description>
        </S.Container>
      </S.OuterContainer>
    )}
  />
)

export default LandingBio
