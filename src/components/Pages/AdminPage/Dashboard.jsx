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

 } from '@chakra-ui/react'
 import "./../admin.css"
 import { osis } from '../../../App'
 import Courses from './Courses';
import ShowMapel from './ShowMapel';


function Dashboard() {
  const {colorMode} = useContext(osis)
  const myColor = colorMode == "light" ? "gray.500" : " gray.500"

  return (
    <Box w={"full"}>
        <Box display={"flex"} gap={2}>
            <Tabs w={"full"} defaultIndex={1}>
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
                  <ShowMapel />
                </TabPanel>

                {/* matapelajaran */}
                <TabPanel>
                  <Courses />
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


export default Dashboard