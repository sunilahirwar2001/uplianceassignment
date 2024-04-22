
// import { Button, Flex, SimpleGrid, Container, Heading,Input, GridItem } from '@chakra-ui/react';
// import React, { useState,useEffect } from 'react';
// import { TextField } from '@mui/material';
// const Counters = () => {
// const [count, setCount] = useState(() => {
//     const savedCount = localStorage.getItem('count');
//     return savedCount ? parseInt(savedCount, 10) : 0;

//   });


//   // Counter ki value change hone par local storage ko update karein
//   useEffect(() => {
//     localStorage.setItem('count', count.toString());
//   }, [count]);

//   const [text, setText] = useState('');

//   const handleChange = (e) => {
//     setText(e.target.value);
//   };
//   return (
//     <>  
//     <Container maxW="700px" borderRadius='12px' margin='20px' height="300px" p={6}  backgroundColor="gray" border="2px solid black" bg="gray.100">
//       <Flex h="100%" justify="center" align="center">
//         <SimpleGrid columns={1} spacing={6} color='white'  textAlign="center" >
    
//           <div
//             style={{
//               width: 80,
//               height: 80,
//               border: '1px solid gray',
//               borderRadius: 8,
//               textAlign: 'center',
//               padding: '10px',
//               marginTop:'-90px',
             
//             }}
//           >
//             <Heading as="h2" size="md" color="gray.800">
//             {count}     Counter 
//             </Heading>
//             <Flex justify="center" mt={4}>
//               <Button
//                 size="lg"
//                 onClick={() => setCount(count + 1)}
//                 mx={1}
//                 color="white"
//                 background='blue'
//                 fontSize="48px"
//                 width="50px"
//                 height="51px"
//                 lineHeight="51px"
//                 fontWeight="normal"
//                 borderWidth="2px"
//                 borderColor="gray"
//                 marginRight='10px'
//               >
//                 +
//               </Button>

//               <Button
//                 size="lg"
//                 onClick={() => setCount(0)}
//                 mx={1}
//                 color="white"
//                 background='red'
//                 fontSize='16px'
//                 width="50px"
//                 height="51px"
//                 lineHeight="51px"
//                 fontWeight="normal"
//                 borderWidth="2px"
//                 borderColor="gray"
//                 marginRight='10px'
//               >
//                 Reset
//               </Button>

//               <Button
//                 size="lg"
//                 onClick={() => setCount(count - 1)}
//                 mx={1}
//                 color="white"
//                 background='green'
//                 fontSize="48px"
//                 width="50px"
//                 height="51px"
//                 lineHeight="51px"
//                 fontWeight="normal"
//                 borderWidth="2px"
//                 borderColor="gray"
//                 marginRight='10px'    
//               >
//                 -
//               </Button>
//              </Flex>
//           </div>

//   </SimpleGrid>
//   </Flex>
//   </Container>
 













//   <Container maxW="700px" borderRadius='12px' margin='20px' height="300px" p={6}  backgroundColor="gray" border="2px solid black" bg="gray.100">
//       <Flex h="100%" justify="center" align="center">
//         <SimpleGrid columns={1} spacing={6} color='white'  textAlign="center" >
//           <div
//             style={{
//               width: 80,
//               height: 80,
//               border: '1px solid gray',
//               borderRadius: 8,
//               textAlign: 'center',
//               padding: '10px',
//               marginTop:'-90px',
             
//             }}
//           >
//             <Heading as="h2" size="md" color="gray.800">
//             {count}     Counter 
//             </Heading>
//             <Flex justify="center" mt={4}>
//               <Button
//                 size="lg"
//                 onClick={() => setCount(count + 1)}
//                 mx={1}
//                 color="white"
//                 background='blue'
//                 fontSize="48px"
//                 width="50px"
//                 height="51px"
//                 lineHeight="51px"
//                 fontWeight="normal"
//                 borderWidth="2px"
//                 borderColor="gray"
//                 marginRight='10px'
//               >
//                 +
//               </Button>

//               <Button
//                 size="lg"
//                 onClick={() => setCount(0)}
//                 mx={1}
//                 color="white"
//                 background='red'
//                 fontSize='16px'
//                 width="50px"
//                 height="51px"
//                 lineHeight="51px"
//                 fontWeight="normal"
//                 borderWidth="2px"
//                 borderColor="gray"
//                 marginRight='10px'
//               >
//                 Reset
//               </Button>

//               <Button
//                 size="lg"
//                 onClick={() => setCount(count - 1)}
//                 mx={1}
//                 color="white"
//                 background='green'
//                 fontSize="48px"
//                 width="50px"
//                 height="51px"
//                 lineHeight="51px"
//                 fontWeight="normal"
//                 borderWidth="2px"
//                 borderColor="gray"
//                 marginRight='10px'    
//               >
//                 -
//               </Button>
//              </Flex>
//           </div>

//   </SimpleGrid>
//   </Flex>
//   </Container>
//     </>
//   );
// };
// export default Counters;




import { Button, Flex, SimpleGrid, Container, Heading, Input, Textarea } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const Counters = () => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  // Counter ki value change hone par local storage ko update karein
  useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count]);

  return (
    <>
    <SimpleGrid columns={2} spacing={6}>
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
              <Heading as="h2" size="md" color="gray.800">
                {count} Counter
              </Heading>
              <Flex justify="center" mt={4}>
                <Button
                  size="lg"
                  onClick={() => setCount(count + 1)}
                  mx={1}
                  color="white"
                  background='blue'
                  fontSize="48px"
                  width="50px"
                  height="51px"
                  lineHeight="51px"
                  fontWeight="normal"
                  borderWidth="2px"
                  borderColor="gray"
                  marginRight='10px'
                >
                  +
                </Button>

                <Button
                  size="lg"
                  onClick={() => setCount(0)}
                  mx={1}
                  color="white"
                  background='red'
                  fontSize='16px'
                  width="50px"
                  height="51px"
                  lineHeight="51px"
                  fontWeight="normal"
                  borderWidth="2px"
                  borderColor="gray"
                  marginRight='10px'
                >
                  Reset
                </Button>

                <Button
                  size="lg"
                  onClick={() => setCount(count - 1)}
                  mx={1}
                  color="white"
                  background='green'
                  fontSize="48px"
                  width="50px"
                  height="51px"
                  lineHeight="51px"
                  fontWeight="normal"
                  borderWidth="2px"
                  borderColor="gray"
                  marginRight='10px'
                >
                  -
                </Button>
              </Flex>
            </div>
          </SimpleGrid>
        </Flex>
      </Container>
       
 <Container maxW="700px" borderRadius='12px' margin='20px' height="300px" p={6} backgroundColor="gray" border="2px solid black" bg="gray.100">
          <SimpleGrid columns={1} spacing={6} color='white' textAlign="center" >
             <Textarea placeholder='Enter your name' />
          </SimpleGrid>
      </Container>


      
 






    </SimpleGrid>
    </>
  );
};
export default Counters;






















