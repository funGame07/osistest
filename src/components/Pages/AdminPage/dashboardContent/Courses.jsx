// ### Import package from node_modules
import React, {useState, useContext, useEffect} from 'react'

// ### Import package from chakra ui
import { 
    Box,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Button,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Flex
 } from '@chakra-ui/react'

//  import icons 
 import { IoIosAddCircleOutline } from "react-icons/io";

 // ### Import pages from components/event
 import ShowMapel from './ShowMapel';
 import CreateMapel from './CreateMapel';
import { quizContext } from '../Dashboard';

function Courses() {
    // Declaration Hooks
    const {createMapel, setCreateMapel, allMapel, setInAll} = useContext(quizContext)
    const {isOpen, onOpen, onClose} = useDisclosure()

    // How to make Quiz Steps
    const steps = [
        { title: 'Pertama', description: 'Buat mata pelajaran dulu' },
        { title: "Kedua", description: "Klik mata pelajaran yg sudah dibuat"},
        { title: 'Ketiga', description: 'Klik tambah soal' },
        { title: 'Keempat', description: 'Pilih metode menjawab (isian/pilgan)' },
        { title: "Kelima", description: "Ketik soal dan jawaban sesuai kolom"},
        { title: "Keenam", description: "Klik submit"}
      ]
      const { activeStep } = useSteps({
        index: -1,
        count: steps.length,
      })

  return (
    <>
    <Accordion allowToggle>
        <AccordionItem>
            <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
                Pelajari cara buat quiz
            </Box>
            <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
            <Stepper index={activeStep} orientation='vertical'>
                {steps.map((step, index) => (
                <Step key={index}>
                    <StepIndicator>
                    <StepStatus               
                        complete={<StepIcon />}
                        incomplete={<StepNumber />}
                        active={<StepNumber />}
                    />
                    </StepIndicator>

                    <Box flexShrink='0'>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                    </Box>

                    <StepSeparator />
                </Step>
                ))}
            </Stepper>
            </AccordionPanel>
        </AccordionItem>
    </Accordion>
    <Box mt={3}>
        <Button leftIcon={<IoIosAddCircleOutline size={15}/>} colorScheme='blue' variant={"outline"} mb={3} 
        rounded={"lg"} fontSize={"10px"} size={"sm"} onClick={()=> setCreateMapel(true)}>
            <Text fontSize={"10px"}>Buat Mata Pelajaran</Text>
        </Button>
        <Flex flexWrap={"wrap"} gap={5} justifyContent={{base: "center", lg: "start"}}>
            {allMapel.map((data, i) => {
                    //CHANGE THIS
                    return <ShowMapel key={i}
                            customColor="cyan" 
                            mapel="MATEMATIKA" 
                            jumlah="10" 
                            judul="BEGINNER MTK QUIZ" 
                            note=" salah 1 denda 5000" 
                            img="quizbg3.png"/>
                  })}
        </Flex>
        
        {createMapel && 
        <Modal isOpen={createMapel} closeOnOverlayClick={false} size={"5xl"}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <ModalCloseButton onClick={()=> setCreateMapel(false)}/>
                </ModalHeader>
                <ModalBody>
                    <CreateMapel />
                </ModalBody>
                
            </ModalContent>    
        </Modal>}
    </Box>
    </>
  )
}

export default Courses