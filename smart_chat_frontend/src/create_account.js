import { Button, Card, Form } from 'react-bootstrap';
import { useRef,useState } from 'react';
// import Axios from "axios";
import axios, * as others from 'axios';

export default function CreateAccount(){
const NameRef=useRef(null)

    function handleSubmit(e){
        e.preventDefault()
        let form=NameRef.current
        let data=Array.from(form.elements)
        .filter((input)=>input.name)
        .reduce((obj,input)=>Object.assign(obj,{[input.name]:input.value}),{})
        console.log("JSON.stringify(data): ",JSON.stringify(data))
        const formendpoint='https://backend-dot-smart-chat-383601.wl.r.appspot.com/auth/registration/'

        const config = { "Content-Type": "application/json" }
        const options = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",

            }
          };
        const response=axios.post(formendpoint,data,options)
            .then(function(response){console.log(response)})
        // fetch(
        //     formendpoint,{
        //         method:'POST',
        //         headers:{
        //             Accept:'application/json',
        //             "Content-Type": "application/json",
        //         },
        //         body: data,

        //     }
        // )
        // .then((response) => {
        //     if (response.status !== 200) {
        //     //   throw new Error(response.json);
        //     console.log("inside response.status!=200: ",response.status)
        //     }
  
        //     return response.body;
        //   })

    }

    return(
        // <div>AOA!</div>
        <Form onSubmit={handleSubmit} ref={NameRef}> 
            <Form.Group>
                <Form.Label><b>Name</b></Form.Label>
                <Form.Control type="text" name="username"  placeholder="Enter Name" />
                <Form.Label><b>Password</b></Form.Label>
                <Form.Control type="text" name="password1"  placeholder="Enter Password" />
                <Form.Label><b>Password</b></Form.Label>
                <Form.Control type="text" name="password2"  placeholder="Enter Password" />
                <Form.Label><b>Email</b></Form.Label>
                <Form.Control type="text" name="email"  placeholder="Enter Email" />
            </Form.Group>
            <Button variant="primary mb-3" type="submit">
            Submit
            </Button>
        </Form>
    )
}