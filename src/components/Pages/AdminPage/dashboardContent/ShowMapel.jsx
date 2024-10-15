import React, { useState, createContext } from 'react'

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

export const idMapel = createContext()

function ShowMapel({id_subject, customColor, name, totalQuestion, title, note, image}) {
  const [displayDetail, setDisplayDetail] = useState(false)
  // const [idMapelDetail, setIdMapelDetail] = useState(id_subject)
  const {isOpen, onOpen, onClose} = useDisclosure()

  function handleDetail(){
    setDisplayDetail(true)
    onOpen()
  }

  return (
    <idMapel.Provider value={{id_subject}}>
      <Flex flexWrap={"wrap"} gap={{sm: 0}} justifyContent={{base: "space-between", sm: "start"}} rowGap={5}>
        <Box onClick={handleDetail}> 
          <Mapel 
          id_subject={id_subject}
          customColor={customColor} 
          name={name}
          totalQuestion={totalQuestion} 
          title={title}
          note={note} 
          image={image}/>
        </Box>

      {displayDetail ? <ShowMapelDetail isOpen={isOpen} onClose={onClose}
                      comp={<Mapel 
                        id_subject={id_subject}
                        customColor={customColor} 
                        name={name}
                        totalQuestion={totalQuestion} 
                        title={title}
                        note={note} 
                        image={image}/>}
                      /> 
      : <span/>}

      </Flex>
    </idMapel.Provider>
    
  )
}

export default ShowMapel