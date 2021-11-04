import { Container } from "react-bootstrap"
import React from 'react'
import Layout from '../../components/Layout'

const Home=(props)=> {
    return (
        <>
         <Layout>
         <Container style={{margin:'5rem',background:'#fff',textAlign:'center'}} className="text_area">
            <h1> welcome to admin dashboard</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
         </Container>
         </Layout>
       
       
       </>
    )
}

export default Home
