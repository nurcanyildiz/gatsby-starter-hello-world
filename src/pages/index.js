import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import Layout from '../components/layout'


const IndexPage = () => {
  return(
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage;