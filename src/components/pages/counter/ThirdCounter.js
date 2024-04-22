import { Button, ChakraProvider, VStack, Grid, Box, Text, HStack, Textarea } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
   import { useData } from '../../../DataContext';
   const ThirdCounter = () => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount ? parseInt(savedCount, 10) : 0;
  });  
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const handleBoldClick = () => {
    setIsBold(!isBold);
  };

  const handleItalicClick = () => {
    setIsItalic(!isItalic);
  };

  const handleUnderlineClick = () => {
    setIsUnderline(!isUnderline);
  };

  const generateStyle = () => {
    const style = {};
    if (isBold) style.fontWeight = 'bold';
    if (isItalic) style.fontStyle = 'italic';
    if (isUnderline) style.textDecoration = 'underline';
    return style;
  };
  
  const { userData } = useData(); 

  const userDataJSON = JSON.stringify(userData, null, 2);

  useEffect(() => {
    const savedCount = localStorage.getItem('count');
    if (savedCount) {
      setCount(parseInt(savedCount, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };
  const linearGradient = `linear-gradient(to right, #FFD700 ${count}%, #FFFFFF ${count}%)`;

  return (
    <ChakraProvider>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}  marginLeft="12px"  >
        <Box borderWidth="1px" borderRadius="lg" p={4} mt={3}  height='300px' margin='20px'  background={linearGradient}>
          <Text fontSize="2xl" textAlign="center">{count}</Text>
          <VStack>
            <Text fontSize="2xl" textAlign="center">Counter</Text>
          </VStack>
          <HStack display='flex' justifyContent='center' alignContent='center' marginBottom='20px'>
            <Button gap='12px' fontSize="2xl" textAlign="center" colorScheme='blue' variant="solid" onClick={increment}>+</Button>
            <Button gap='12px' fontSize="2xl" textAlign="center" colorScheme='red' onClick={reset}>Reset</Button>
            <Button gap='12px' fontSize="2xl" textAlign="center" colorScheme='green' onClick={decrement}>-</Button>
          </HStack>
        </Box>
  
        <Box borderWidth="1px" borderRadius="lg" p={4} mt={3} height="300px" margin="20px">
      <VStack>
        <Textarea
          placeholder="Enter your text"
          width='500px'
          height='200px'
          value={userDataJSON}
          readOnly
          style={{ ...generateStyle() }}
       / >
        <HStack>
        <Button onClick={handleBoldClick} colorScheme={isBold ? 'blue' : 'gray'}>
          Bold
        </Button>
        <Button onClick={handleItalicClick} colorScheme={isItalic ? 'blue' : 'gray'}>
          Italic
        </Button>
        <Button onClick={handleUnderlineClick} colorScheme={isUnderline ? 'blue' : 'gray'}>
          Underline
        </Button>
        </HStack>
      </VStack>
    </Box>
      </Grid>
    </ChakraProvider>
  );
};

export default ThirdCounter;
