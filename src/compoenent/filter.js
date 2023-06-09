import React from 'react';
import { useSelector } from 'react-redux';

export const Filter = () => {
  const state = useSelector((state) => state.task.value);

  const filterTasksDone = () => {
    const filteredTasks = state.filter((element) => element.isDone === 'yes');
    return filteredTasks.map((element) => (
      <ul
        style={{
          listStyleType: 'none',
          backgroundColor: 'red',
          margin: 'auto',
          padding: '10px',
          borderRadius: '10px',
          width: '80%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
        key={element.id}
      >
        <li>{element.id}</li>
        <li>{element.description}</li>
        <li>{element.isDone}</li>
      </ul>
    ));
  };

  return (
    <div>
      <button onClick={filterTasksDone}>Show Done Tasks</button>
    </div>
  );
};
