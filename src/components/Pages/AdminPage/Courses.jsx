// ### Import package from node_modules
import React, {useState} from 'react'

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
    Text
 } from '@chakra-ui/react'

//  import icons 
 import { IoIosAddCircleOutline } from "react-icons/io";

 // ### Import pages from components/event
 import ShowMapel from './ShowMapel';
 import CreateMapel from './CreateMapel';
import CreateQuestion from './CreateQuestion';


function Courses() {
    // Declaration Hooks
    const [createMapel, setCreateMapel] = useState(false)
    const [createQuestion, setCreateQuestion] = useState(false)

    // How to make Quiz Steps
    const steps = [
        { title: 'Pertama', description: 'Buat mata pelajaran dulu' },
        { title: 'Kedua', description: 'Klik tambah soal' },
        { title: 'Ketiga', description: 'Pilih metode menjawab (isian/pilgan)' },
        { title: "Keempat", description: "Ketik soal dan jawaban sesuai kolom"},
        { title: "Kelima", description: "Klik submit"}
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
        rounded={"full"} fontSize={"10px"} size={"sm"} onClick={()=> setCreateMapel(true)}>
            <Text fontSize={"10px"}>Buat Mata Pelajaran</Text>
        </Button>
        {createMapel? <CreateMapel setCreateMapel={setCreateMapel} />:<ShowMapel />}
        <Button leftIcon={<IoIosAddCircleOutline size={15}/>} colorScheme='blue' variant={"outline"} mb={3} 
        rounded={"full"} fontSize={"10px"} size={"sm"} onClick={()=> setCreateQuestion(true)}>
            <Text fontSize={"10px"}>Buat Pertanyaan</Text>
        </Button>
        {createQuestion? <CreateQuestion setCreateQuestion={setCreateQuestion} />:<div />}
    </Box>
    </>
  )
}

export default Courses