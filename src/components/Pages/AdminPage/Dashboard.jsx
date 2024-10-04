import React, {useContext} from 'react'
import { 
    Box,
    Text,
    Flex,
    Button,
    Badge,
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel,
    TabIndicator,

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
 } from '@chakra-ui/react'
 import "./../admin.css"
 import { FaFolderOpen } from "react-icons/fa6";
 import { osis } from '../../../App'

function Dashboard() {
  const {colorMode} = useContext(osis)
  const blue = ["#3558c3", "linear(to-b, transparent, rgba(53, 94, 219, 0.6), #3558c3)", "blue"]
  const cyan = ["#31aed9", "linear(to-b, transparent, rgba(49, 90, 217,0.6), #31aed9)", "blue"]
  const green = ["#366d33", "linear(to-b, transparent, rgba(61, 133, 94,0.6), #366d33)", "green"]
  const yellow = ["#a3a036", "linear(to-b, transparent, rgba(211, 206, 45,0.6), #a3a036)", "yellow"]

  const myColor = colorMode == "light" ? "gray.500" : " gray.500"

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
    <Box w={"full"}>
        <Box display={"flex"} gap={2}>
            <Tabs w={"full"}>
              <TabList pl={"18px"}>
                <Tab fontWeight={"600"}>ALL</Tab>
                <Tab fontWeight={"600"}>COURSES</Tab>
                <Tab fontWeight={"600"}><span id='live'/>LIVE</Tab>
                
                
                
              </TabList>
              <TabIndicator mt='-1px' height='4px' bg="blue.600" borderRadius='2px' />
              <TabPanels>
                {/* semua */}
                <TabPanel>
                  <Text py={2} opacity={0.5}>Di bagian ini anda hanya dapat melihat preview soal-soal saja. (Tidak bisa mengedit)</Text>
                  <Flex flexWrap={"wrap"} gap={{sm: 5}} justifyContent={{base: "space-between", sm: "start"}} rowGap={5}>
                    <Card customColor={cyan}/>
                    <Card customColor={blue}/>
                    <Card customColor={yellow}/>
                    <Card customColor={green}/>
                  </Flex>
                  
                </TabPanel>

                {/* matapelajaran */}
                <TabPanel>
                <Accordion allowToggle>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as='span' flex='1' textAlign='left'>
                          Pelajari cara buat quiz
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
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
                  
                </TabPanel>

                {/* live */}
                <TabPanel>

                </TabPanel>
              </TabPanels>
            </Tabs>
        </Box>
    </Box>
  )
}

function Card({customColor}){
  console.log(customColor)

  return(
    <Box color={"white"} pos={"relative"} rounded={"xl"} _hover={{filter: "auto", brightness: "0.7"}}
    w={"160px"} h={"260px"} className='font-link' bgImage={"image.png"} bgPosition={"center"} bgSize={"cover"}>
      <Box bg={customColor[0]} h={"8%"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} px={1} roundedTop={"xl"} >
        <Box display={"flex"} alignItems={"center"} gap={1} px={1}>
          <FaFolderOpen size={10}/>
          <Text fontSize={"8px"} fontWeight={"700"} backdropBlur={"8px"}>MATEMATIKA</Text>
        </Box>
        <Badge colorScheme={customColor[2]} variant={"solid"} letterSpacing={1}
        fontSize={"7px"} rounded={"lg"} color={"white"} justifySelf={"flex-end"} h={"fit-content"} >
          KELAS 12
        </Badge>
      </Box>
      <Flex position={"absolute"} bottom={0} flexDir={"column"} justifyContent={"center"} w="full" h={"33%"} textAlign={"center"}
      bgGradient={customColor[1]} roundedBottom={"xl"} backdropFilter='auto' backdropBlur='2px' fontWeight={600} gap={2}>
        SOAL MATEMATIKA UNTUK KELAS 12
        <Text fontSize={"8px"}>Tanggal 13 Januari 2025</Text>
      </Flex>

    </Box>
  )
  
}

export default Dashboard