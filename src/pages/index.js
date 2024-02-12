import React from "react"
import Layout from "../components/layout"

const HomePage = () => (
  <Layout>
    <div style={{ margin: '3rem auto', maxWidth: 600 }}>
      <h1 style={{ textAlign: 'center', color: 'purple' }}>Welcome to My Website!</h1>
      <p style={{ textAlign: 'center' }}>This is a sample site for Gatsby and Apollo.</p>
    </div>
  </Layout>
)

export default HomePage