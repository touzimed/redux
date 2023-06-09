import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import {useDispatch} from 'react-redux'
import {addListe} from "../slice/Task"
import { useState } from 'react';
export const Addtask=() =>{
  const dispatch=useDispatch();
  const [description, setDescription] = useState('');
  const [id, setId] = useState('');
  const [done, setDone] = useState('');
  const handleSubmit=(e)=>{e.preventDefault();
   
   dispatch(addListe({id:id,description:description,isDone:done}));

   setDescription(''); 
   setDone(''); 
   setId(''); 
    
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ID of the task</Form.Label>
        <Form.Control
          type="number"
          placeholder="entrer un id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Is done or not</Form.Label>
        <Form.Control
          type="text"
          placeholder="entrer un description"
          value={done}
          onChange={(e) => setDone(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Liste add</Form.Label>
        <Form.Control
          type="text"
          placeholder="is done ?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Addtask;