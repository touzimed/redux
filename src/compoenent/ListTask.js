import React from 'react';
import { useSelector } from 'react-redux';

export default function ListTask() {
  const state = useSelector((state) => state.task.value);

  return (
    <div style={{ display: 'flex', alignContent: 'spaceAround', alignItems: 'stretch', flexDirection: 'column', gap: '10px' }}>
      {state.map((element) => (
        <ul style={{ listStyleType: "none" ,backgroundColor: 'red', margin: 'auto', padding: '10px', borderRadius: '10px', width: '80%',display:'flex',justifyContent: "space-between" }} key={element.id}>
          <li>{element.id}</li>
          <li>{element.description}</li>
          <li>{element.isDone}</li>
        </ul>
      ))}
    </div>
  );
}
