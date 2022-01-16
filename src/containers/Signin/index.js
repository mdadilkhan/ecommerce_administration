import React,{ useState} from 'react'
import Layout from '../../components/Layout'
import { Container,Form,Button, Row ,Col} from "react-bootstrap"
import Input from '../../components/UI/Input'
import { login } from '../../actions'
import {useDispatch,useSelector} from 'react-redux';
import { Redirect } from 'react-router-dom'







const Signin=(props)=> {


   //hooks 
   const [email, setEmail] = useState('');
   const [password,setPassword]=useState('');
//    const [error,setError]=useState('');
   const auth= useSelector(state => state.auth)


    //declaring useDispatch() function for action from compoent to auth.action.js 
    const dispatch = useDispatch();

   



   //function when submit button click by user
   //e.preventDefault();  prevent the default beahviour of browser or stop reloading whole page when reload
    const userLogin=(e)=>{

        e.preventDefault();

        const user={
           email,
           password
        }
        //dispatch to auth.action.js in action file
        dispatch(login(user));
    }


     if(auth.authenticate){
         return <Redirect to={'/'}/>
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
                                   value={email}
                                   type="email"
                                   onChange={(e)=>setEmail(e.target.value)}
                                 />
        
                        <Input 
                                   label="Password"
                                   placeholder="Password"
                                   value={password}
                                   type="password"
                                   onChange={(e)=>setPassword(e.target.value)}
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
