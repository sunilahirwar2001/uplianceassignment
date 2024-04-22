import React , { useState, useEffect }from 'react'
import { Button, Flex, SimpleGrid, Container, Heading, Input ,Stack} from '@chakra-ui/react';

     const SecondCounter = () => {
    const [count, setCount] = useState(() => {
        const savedCount = localStorage.getItem('count');
        return savedCount ? parseInt(savedCount, 10) : 0;
      });
    
      // Counter ki value change hone par local storage ko update karein
      useEffect(() => {
        localStorage.setItem('count', count.toString());
      }, [count]);
  return (
  

    <SimpleGrid columns={2} spacing={6}>

    <Container maxW="700px" borderRadius='12px' margin='20px' height="300px" p={6} backgroundColor="gray" border="2px solid black" bg="gray.100">
      <Flex h="100%" justify="center" align="center">
        <SimpleGrid columns={1} spacing={6} color='white'>
          <div
            style={{
              width: 80,
              height: 80,
              border: '1px solid gray',
              borderRadius: 8,
              textAlign: 'center',
              padding: '10px',
              marginTop: '-90px',
            }}
          >
           <Stack spacing={3}>
  <Input placeholder='userdat small size' size='xs' mb='10px'   fontSize='30px' />
  <Input placeholder=' textfield' size='xs'   mb='10px' fontSize='30px' />
  <Input placeholder='id' size='xs' mb='10px' fontSize='30px' />
  <Button size="lg" colorScheme="blue">Save</Button>
</Stack>
          
          </div>
        </SimpleGrid>
      </Flex>
    </Container>








    <Container maxW="700px" borderRadius='12px' margin='20px' height="300px" p={6} backgroundColor="gray" border="2px solid black" bg="gray.100">
      <Flex h="100%" justify="center" align="center">
        <SimpleGrid columns={1} spacing={6} color='white' textAlign="center" >
          <div
            style={{
              width: 80,
              height: 80,
              border: '1px solid gray',
              borderRadius: 8,
              textAlign: 'center',
              padding: '10px',
              marginTop: '-90px',
            }}
          >
           
     
          </div>
        </SimpleGrid>
      </Flex>
    </Container>
  </SimpleGrid>
  )
}

export default SecondCounter
