import React, { useState } from 'react'

import { 
  Flex, 
  Box,
  AbsoluteCenter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
 } from '@chakra-ui/react'

import Mapel from './Mapel'
import ShowMapelDetail from './ShowMapelDetail'

function ShowMapel({customColor, mapel, jumlah, judul, note, img}) {
  const [displayDetail, setDisplayDetail] = useState(false)
  const [idMapelDetail, setIdMapelDetail] = useState("")
  const {isOpen, onOpen, onClose} = useDisclosure()

  function handleDetail(){
    setDisplayDetail(true)
    onOpen()
  }

  return (
    <Flex flexWrap={"wrap"} gap={{sm: 5}} justifyContent={{base: "space-between", sm: "start"}} rowGap={5}>
      <Box onClick={handleDetail}> 
        <Mapel 
        customColor="cyan" 
        mapel="MATEMATIKA" 
        jumlah="10" 
        judul="BEGINNER MTK QUIZ" 
        note=" salah 1 denda 5000" 
        img="quizbg3.png"/>
      </Box>

    {displayDetail ? <ShowMapelDetail onOpen={onOpen} isOpen={isOpen} onClose={onClose} 
                    comp={<Mapel 
                      customColor="cyan" 
                      mapel="MATEMATIKA" 
                      jumlah="10" 
                      judul="BEGINNER MTK QUIZ" 
                      note=" salah 1 denda 5000" 
                      img="quizbg3.png"/>}
                    /> 
    : <span/>}

    </Flex>
  )
}

export default ShowMapel