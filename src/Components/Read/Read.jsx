import React, { useEffect, useState, Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import './read.css'
//import Button from 'react-bootstrap/Button';

import {
    TableRow,
    TableHeaderCell,
    TableHeader,
    TableFooter,
    TableCell,
    TableBody,
    MenuItem,
    Icon,
    Label,
    Menu,
    Table,
    Button,
    ButtonContent,
    Confirm
} from 'semantic-ui-react'




const Read = () => {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://662390713e17a3ac846f8bdd.mockapi.io/crud/crud`)
            .then((response) => {
                setAPIData(response.data);
            })

    }, [])

    const onClickUpdate = (data) => {
        let { id, employeeName, department, age, gender, salary, place } = data;
        localStorage.setItem('Id', id);
        localStorage.setItem('EmployeeName', employeeName);
        localStorage.setItem('Department', department);
        localStorage.setItem('Age', age);
        localStorage.setItem('Gender', gender);
        localStorage.setItem('Salary', salary);
        localStorage.setItem('Place', place);

    }
    const getData = () => {
        axios.get(`https://662390713e17a3ac846f8bdd.mockapi.io/crud/crud`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }//doubt
    const onDelete = (id) => {
        axios.delete(`https://662390713e17a3ac846f8bdd.mockapi.io/crud/crud/${id}`)
            .then(() => {
                getData();
                setState(false);
                
            }).finally(() => {
                alert('Deleted Succesfully')
            })
    }
    const [state, setState] = useState(false);
    return (

        <div>
            <Link to='/create'>
                <Button primary animated='vertical'>
                    <ButtonContent hidden>  <Icon name='user' /></ButtonContent>
                    <ButtonContent visible>
                        Add New Employee
                    </ButtonContent>
                </Button>
            </Link>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Employee ID</Table.HeaderCell>
                        <Table.HeaderCell>Employee Name</Table.HeaderCell>
                        <Table.HeaderCell>Department</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>View</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.employeeName}</Table.Cell>
                                <Table.Cell>{data.department}</Table.Cell>

                                <Table.Cell>
                                    <Link to='/update'>
                                        <Button onClick={() => onClickUpdate(data)}>Update</Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Link to='/view'>
                                        <Button onClick={() => onClickUpdate(data)}>View</Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button onClick={() => setState(true)}>Delete</Button>
                                    <Confirm
                                        open={state}
                                        content='Are you sure you want to delete this Record?'
                                        onCancel={() => setState(false)}
                                        onConfirm={() => onDelete(data.id)}
                                    />
                                </Table.Cell>


                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}


export default Read
