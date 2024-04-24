import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import {
  FormTextArea,
  FormSelect,
  FormRadio,
  FormInput,
  FormGroup,
  FormCheckbox,
  FormButton,
  Form,
  Container, Header, List, Button
} from 'semantic-ui-react'

const Update = (prop) => {
  let navigate = useNavigate();
  const [id, setId] = useState(null);
  const [employeeName, setEmployeeName] = useState('');
  const [department, setDepartment] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [salary, setSalary] = useState('');
  const [place, setPlace] = useState('');
  const [address, setAddress] = useState('');

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

  return (
   <div >
     <Form  >
      <FormGroup widths='equal'>
        <FormInput className='bgview' readOnly={true}  value={employeeName} fluid label='Employee name' placeholder='Employee Name' />
        <FormInput readOnly={true}  fluid label='Department'  value={department} placeholder='Department'  />
        <FormInput readOnly={true}  value={age} fluid label='Age' placeholder='Age' />
      </FormGroup>
      <FormGroup widths='equal'>
        <FormInput readOnly={true} value={salary} fluid label='Salary' placeholder='Salary' />
        <FormInput 
          fluid
          label='Gender'
          placeholder='Gender' value={gender} readOnly={true} 
        />
      </FormGroup>
      <FormTextArea label='Address' placeholder='Address...' readOnly={true} value={place} />
      <Link to='/'> <Button negative>Cancel</Button></Link>
    </Form>
   </div>
  )
}


export default Update
