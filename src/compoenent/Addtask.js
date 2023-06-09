import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import {useDispatch} from 'react-redux'
import {addListe} from "../slice/Task"
import { useState } from 'react';
export const Addtask=() =>{
  const dispatch=useDispatch();
  const [nom, setNom] = useState('');
  const handleSubmit=(e)=>{e.preventDefault();
   
   dispatch(addListe(nom));

   setNom(''); 
    
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Liste add</Form.Label>
        <Form.Control
          type="text"
          placeholder="entrer un nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Addtask;