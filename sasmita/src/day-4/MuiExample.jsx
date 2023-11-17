import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from '@mui/material';

const fruits = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

const MuiExample = () => {
  const [name, setName] = useState('');
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(`Hello, ${name}! Your favorite fruit is ${selectedFruit}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        data-testid="name"
        value = {name}
        onChange={(e) => setName(e.target.value)}
      />
      <br></br>
      <br></br>
      <Autocomplete
        data-testid="autocomplete"
        options={fruits}
        renderInput={(params) => <TextField {...params} label="Choose a fruit" />}
        onChange={(_, value) => setSelectedFruit(value)}
      />
      <br></br>
      <Button type="submit" data-testid="button">
        Submit
      </Button>
      <br></br>
      {<p>{message}</p>}
    </form>
  );
};

export {MuiExample};
