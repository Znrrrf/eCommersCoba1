import "../App.css";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
} from '@chakra-ui/react'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const UserList = () => {

    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    },[])

    const getUsers = async () => {
        const response = await axios.get('http://localhost:5000/user/')
        .then((result) => {
            // console.log(result.data.data);
            setUsers(result.data.data)
        }).catch((err) => {
            console.error(err);
        });
        // console.log(response.data.data);
    }

    // const users = [
    //     {
    //         id: 1,
    //         firstname: "user",
    //         lastname: "coba1",
    //         email: "usercoba1@gmail.com",
    //         password: "123"
    //     }, {
    //         id: 2,
    //         firstname: "user",
    //         lastname: "coba2",
    //         email: "usercoba1@gmai2.com",
    //         password: "123"
    //     }
    // ]


    console.log(users);
    let counter = 0;


    const userTable = users.map((el) => {
        // console.log(el);
        counter++
        return (
            <Tbody key={el.id}>
                <Tr>
                    <Td>{counter}</Td>
                    <Td>{el.firstname} {el.lastname}</Td>
                    <Td>{el.email}</Td>
                </Tr>
            </Tbody>
        )
    })

    return (
        <div>
            <div>
                <h1>ini user list</h1>
            </div>
            <div>
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>no</Th>
                                <Th>name</Th>
                                <Th>email</Th>
                            </Tr>
                        </Thead>
                        {userTable}
                    </Table>
                </TableContainer>
                <Button onClick={() => navigate('/')}>back to login</Button>
            </div>
        </div>
    )
}

export default UserList;