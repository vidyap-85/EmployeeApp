import React, { useState } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
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


const Create = () => {
    let navigate= useNavigate();
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
    const postData = () => {
        // console.log(firstName);
        // console.log(lastName);
        console.log(gender)
        axios.post(`https://662390713e17a3ac846f8bdd.mockapi.io/crud/crud`, {
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
        .catch((e) => {
          debugger;
           alert('Error')
        })
        .finally(() => {
            alert('Saved Succesfully')
         })
       
           }
  return (

    <Form>
    <FormGroup widths='equal'>
      <FormInput fluid label='Employee name' placeholder='Employee Name' onChange={(e) => setEmployeeName(e.target.value)} />
      <FormSelect fluid label='Department' options={departmentData} placeholder='Department' onChange={(e) => setDepartment(e.target.textContent)} />
      <FormInput fluid label='Age' placeholder='Age' onChange={(e) => setAge(e.target.value)} />
    </FormGroup>
    <FormGroup widths='equal'>
     <FormInput fluid label='Salary' placeholder='Salary' onChange={(e) => setSalary(e.target.value)} />
      <FormSelect fluid label='Gender'  options={genderData} placeholder='Gender' onChange={(e)=>setGender(e.target.textContent)} />
    </FormGroup>
    <FormTextArea label='Adress' placeholder='Address...'  onChange={(e) => setPlace(e.target.value)} />
    <FormCheckbox     error={{
        content: 'You must agree to the terms and conditions',
        pointing: 'left',
      }}  label='I agree to the Terms and Conditions' />
    <Button onClick={postData} type='submit' positive>Save</Button>
    <Link to='/'> <Button negative>Cancel</Button></Link>
  </Form>

  )
}


export default Create
