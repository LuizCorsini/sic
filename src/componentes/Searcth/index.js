import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';


const ButtonSrth = styled(Button)`
  margin-left: 5px;
`

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <Form className='d-flex' onSubmit={handleSubmit}>
      <FormControl
        type="text"
        placeholder="Digite sua pesquisa..."
        value={query}
        onChange={handleChange}
      />
      <ButtonSrth type="submit">Pesquisar</ButtonSrth>
    </Form>
  );
};

export default SearchForm;
