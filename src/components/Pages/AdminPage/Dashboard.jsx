import React, {useContext, createContext, useState} from 'react'
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

 } from '@chakra-ui/react'
 import "./../admin.css"
 import { osis } from '../../../App'
 import Courses from './dashboardContent/Courses';
import ShowMapel from './dashboardContent/ShowMapel';

export const quizContext = createContext()

function Dashboard() {
  const {colorMode} = useContext(osis)
  const [createMapel, setCreateMapel] = useState(false)
  const [createQuestion, setCreateQuestion] = useState(false)
  const [inAll, setInAll] = useState(true)

  const myColor = colorMode == "light" ? "gray.500" : " gray.500"

  const provider = {
    setCreateQuestion,
    createQuestion,
    createMapel,
    setCreateMapel,
    inAll,
    setInAll
  }

  return (
    <quizContext.Provider value={provider}>
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
                <TabPanel onClick={()=> setInAll(true)}>
                  <Text py={2} opacity={0.5}>Di bagian ini anda hanya dapat melihat preview soal-soal saja. (Tidak bisa mengedit)</Text>
                  <ShowMapel />
                </TabPanel>

                {/* matapelajaran */}
                <TabPanel onClick={()=> setInAll(false)}>
                  <Courses />
                </TabPanel>

                {/* live */}
                <TabPanel>

                </TabPanel>
              </TabPanels>
            </Tabs>
        </Box>
    </Box>
    </quizContext.Provider>
  )
}


export default Dashboard