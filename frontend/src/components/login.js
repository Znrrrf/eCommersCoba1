import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <h1>Login</h1>
            </div>
            <div>
                <FormControl>
                    <FormLabel>email</FormLabel>
                    <Input placeholder='email' />
                </FormControl>
                <FormControl>
                    <FormLabel>password</FormLabel>
                    <Input placeholder='password' type="password" />
                </FormControl>
                <Button onClick={() => navigate('/userList')}>LOGIN</Button>
                <Button onClick={() => navigate('/addUser')}>SIGN UP</Button>
            </div>
        </div>
    )
}

export default Login;