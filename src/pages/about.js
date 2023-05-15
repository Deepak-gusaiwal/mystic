import React from 'react'
import Layout from './components/Layout'

const about = () => {
    return (
        <Layout pageTitle="About Page">
            <div className='container'>
                <h2>About Page content</h2>
            </div>
            <p>this is About Page</p>
        </Layout>
    )
}
export const Head = () => {
    <>
        <title>About Page</title>
    </>
}
export default about