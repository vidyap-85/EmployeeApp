import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom'
import {
    FormTextArea,
    FormSelect,
    FormRadio,
    FormInput,
    FormGroup,
    FormCheckbox,
    FormButton,
    Form,
    Container, Header, List,Button
  } from 'semantic-ui-react'

const Update= () => {
    let navigate = useNavigate();
    const [id, setId] = useState(null);
    const [employeeName, setEmployeeName] = useState('');
    const [department, setDepartment] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [salary, setSalary] = useState('');
    const [place, setPlace] = useState('');
    const [address, setAddress] = useState('');
    const genderData=[
        {id:'1',text:'Male',value:"Male"},
        {id:'2',text:'Female',value:"Female"}
    ]
    const departmentData=[
        {id:'1',text:'QA',value:"QA"},
        {id:'2',text:'DEV',value:"DEV"},
        {id:'3',text:'Support',value:"Support"},
        {id:'4',text:'Sales',value:"Sales"},
        {id:'5',text:'Admin',value:"Admin"}
    ]

useEffect(() => {
        setId(localStorage.getItem('Id'))
        setEmployeeName(localStorage.getItem('EmployeeName'));
        setDepartment(localStorage.getItem('Department'));
        setAge(localStorage.getItem('Age'));
        setGender(localStorage.getItem('Gender'));
        setSalary(localStorage.getItem('Salary'));
        setPlace(localStorage.getItem('Place'));
        setAddress(localStorage.getItem('Address'));
        }, []);
   


           const updateAPIData = () => {
            debugger;
            axios.put(`https://662390713e17a3ac846f8bdd.mockapi.io/crud/crud/${id}`, {
                employeeName,
                department,
                age,
                gender,
                salary,
                place,
                address

            })
            .then(() => {
                navigate('/')
            })
            .finally(() => {
                alert('Updated Succesfully')
             })
        }
  return (
    <Form>
    <FormGroup widths='equal'>
      <FormInput value={employeeName} fluid label='Employee name' placeholder='Employee Name' onChange={(e) => setEmployeeName(e.target.value)} />
      <FormSelect fluid label='Department' options={departmentData} value={department} placeholder='Department' onChange={(e) => setDepartment(e.target.textContent)} />
      <FormInput value={age}  fluid label='Age' placeholder='Age' onChange={(e) => setAge(e.target.value)} />
    </FormGroup>
    <FormGroup widths='equal'>
     <FormInput value={salary} fluid label='Salary' placeholder='Salary' onChange={(e) => setSalary(e.target.value)} />
      <FormSelect
        fluid
        label='Gender'
        options={genderData}
        placeholder='Gender' value={gender}  onChange={(e)=>setGender(e.target.textContent)}
      />
    </FormGroup>
    <FormTextArea label='Adress' placeholder='Address...'   onChange={(e)=>setPlace(e.target.value)}  value={place} />
    <FormCheckbox label='I agree to the Terms and Conditions' />
    <Button onClick={updateAPIData} type='submit' positive>Save</Button>
    <Link to='/'> <Button negative>Cancel</Button></Link>
  </Form>
  )
}


export default Update
