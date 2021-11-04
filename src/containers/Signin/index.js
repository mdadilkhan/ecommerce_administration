import React from 'react'
import Layout from '../../components/Layout'
import { Container,Form,Button, Row ,Col} from "react-bootstrap"
import Input from '../../components/UI/Input'
import { login } from '../../actions'
import {useDispatch} from 'react-redux';







const Signin=(props)=> {


    //declaring useDispatch() function for action from compoent to auth.action.js 
    const dispatch = useDispatch();
   //function when submit button click by user
   //e.preventDefault();  prevent the default beahviour of browser or stop reloading whole page when reload
    const userLogin=(e)=>{
        e.preventDefault();
        const user={
            email:'mdadilakhtar8@gmail.com',
            password:'12345678'
        }
        //dispatch to action file
        dispatch(login(user));
    }






    return (
        <>
            <Layout>
                <Container>
                 <Row style={{marginTop:'50px'}} >
                     <Col md={{span:6, offset:3}} >
                         <Form onSubmit={userLogin}>
                         <Input 
                                   label="Email"
                                   placeholder="Email"
                                   value=""
                                   type="email"
                                   onChange={()=>{}}
                                 />
        
                        <Input 
                                   label="Password"
                                   placeholder="Password"
                                   value=""
                                   type="password"
                                   onChange={()=>{}}
                                 />
                           <Button variant="primary" type="submit">
                             Submit
                           </Button>
                         </Form>
                     </Col>
                 </Row>
                </Container>
            </Layout>
        </>
    )
}

export default Signin
