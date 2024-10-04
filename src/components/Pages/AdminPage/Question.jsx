import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    FormLabel,
    Box,
    Divider,
    Text
  } from '@chakra-ui/react'
  import { IoIosAddCircleOutline } from "react-icons/io";


function Question() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    
    return (
        <>
        <Button ref={btnRef} colorScheme='yellow' onClick={onOpen} display={"flex"} 
        flexDir={"column"} py={3} gap={2} minH={"fit-content"} bgGradient={"linear(to-br, orange, gold)"} 
        opacity={0.8} border={"1px solid black"}>
            <Text>Tambah Pertanyaan</Text>
            <IoIosAddCircleOutline size={26}/>

        </Button>
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
            size={{base: "sm", lg: "xl"}}
        >
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Buat Pertanyaan</DrawerHeader>
    
            <DrawerBody display={"flex"} gap={2} flexDir={"column"}>
                <Box>
                    <FormLabel htmlFor='question'>Pertanyaan</FormLabel>
                    <Input
                    id='question'
                    placeholder='1+1 = ?'
                    />
                </Box>
                <Box>
                    <FormLabel htmlFor='score'>Nilai Soal</FormLabel>
                    <Input
                    id='score'
                    placeholder='score soal'
                    />
                </Box>

                <Divider m={3}/>

                <Box>
                    <FormLabel htmlFor='option1'>Option 1</FormLabel>
                    <Input
                    id='option1'
                    placeholder='Pilihan 1'
                    />
                </Box>
                <Box>
                    <FormLabel htmlFor='option2'>Option 2</FormLabel>
                    <Input
                    id='option2'
                    placeholder='Pilihan 2'
                    />
                </Box>
                <Box>
                    <FormLabel htmlFor='option3'>Option 3</FormLabel>
                    <Input
                    id='option3'
                    placeholder='Pilihan 3'
                    />
                </Box>
                <Box>
                    <FormLabel htmlFor='option4'>Option 4</FormLabel>
                    <Input
                    id='option4'
                    placeholder='Pilihan 4'
                    />
                </Box>

                <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={onClose}>
                    Cancel
                    </Button>
                    <Button colorScheme='yellow'>Save</Button>
                </DrawerFooter>
            </DrawerBody>
                <DrawerFooter>
                    
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
        </>
    )
}

export default Question