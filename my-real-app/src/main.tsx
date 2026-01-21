import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import HomePage from './Pages/Home' 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <HomePage /> 
    </Layout>
  </React.StrictMode>
)