/** @jsx jsx */
import React from "react"
import { Global } from "@emotion/core"
import { Box, Container, jsx } from "theme-ui"
import "typeface-ibm-plex-sans"
import SEO from "./seo"
import Header from "./header"
import Footer from "./footer"
import CodeStyles from "../styles/code"
import SkipNavLink from "./skip-nav"
// import "katex/dist/katex.min.css"
// require(`katex/dist/katex.min.css`)

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(theme) => ({
        "*": {
          boxSizing: `inherit`,
        },
        "::selection": {
          backgroundColor: theme.colors.text,
          color: theme.colors.background,
        },
        a: {
          transition: `all 0.3s ease-in-out`,
          color: theme.colors.text,
        },
        img: {
          maxWidth: "min(90vw, 960px)",
          borderRadius: '5px',
          margin: '5px',
          boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.3)"
        },
        iframe: {
          width: "min(90vw, 960px)",
          height: "min(50vw, 540px)",
          boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.3)"
        }

      })}
    />
    <SEO />
    <SkipNavLink>Skip to content</SkipNavLink>
    <Container>
      <Header />
      <Box id="skip-nav" sx={{ ...CodeStyles }} className={className}>
        {children}
      </Box>
      <Footer />
    </Container>
  </React.Fragment>
)

export default Layout
