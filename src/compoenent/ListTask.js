import React from 'react';
import { useSelector } from 'react-redux';

export default function ListTask() {
  const state = useSelector((state) => state.task.value);

  return (
    <div style={{display:'flex',alignContent: "spaceAround", alignItems: "stretch",flexDirection:"column",gap:"10px"}}>
      {state.map((element) => (
        <div key={element}style={{ backgroundColor:"red",margin: "auto",padding:"10px", borderRadius: "10px", width: "80%" }}>{element}</div>
      ))}
    </div>
  );
}