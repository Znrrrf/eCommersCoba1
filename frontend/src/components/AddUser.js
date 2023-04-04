import { useState } from "react";
import "../App.css";
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Input, FormControl, FormLabel } from '@chakra-ui/react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const navigate = useNavigate();

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/auth/register", {
                firstname,
                lastname,
                email,
                password
            });
            navigate('/')
        } catch (err) {
            console.log(err);
        }
    }



    return (
        <div>
            <Card align='center'>
                <CardHeader>
                    <Heading size='md'>Insert Your Data</Heading>
                </CardHeader>
                <CardBody>
                    <FormControl>
                        <FormLabel>firstname</FormLabel>
                        <Input placeholder='firstname' value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>lastname</FormLabel>
                        <Input placeholder='lastname' value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>email</FormLabel>
                        <Input placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>password</FormLabel>
                        <Input placeholder='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </FormControl>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='blue' onClick={() => saveUser}>Submit</Button>
                </CardFooter>
                <Button onClick={() => navigate('/')}>back to login</Button>
            </Card>
        </div>
    )
}

export default AddUser;