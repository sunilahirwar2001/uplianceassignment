import { useState } from 'react';
import { Input, Container } from '@chakra-ui/react';

function EditText() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Container maxW="200px" mt={8}>
      <Input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        h="300px"
      />
    </Container>
  );
}

export default EditText;
