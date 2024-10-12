import React, { useContext, useState } from 'react'
import { 
  Text,
  Button,
  Flex,
  Box,
  Heading,
  Divider,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Image,
  useToast
 } from '@chakra-ui/react'
 import { osis } from '../../../../App'
 import { quizContext } from '../Dashboard';
 import { AiOutlinePicture } from "react-icons/ai";
 import Mapel from './Mapel';
import { saveSomething } from '../../../../../lib/libs';

function CreateMapel() {
  const {setOnSave, setCreateMapel} = useContext(quizContext)
  const toast = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [mapel, setMapel] = useState("")
  const [jumlah, setJumlah] = useState("")
  const [judul, setJudul] = useState("")
  const [note, setNote] = useState("")
  const [img, setImg] = useState("")
  const [customColor, setCustomColor] = useState("default")
  const {colorMode} = useContext(osis)
  const cardBg = colorMode =="light"? "white": "black"
  const pickColor =  ["Default", "Blue", "Cyan", "Green", "Yellow", "Red"]

  async function handleSaveMapel(){
    if(!mapel || !jumlah || !judul || !note || !img){
      return toast({
        title: "Warning",
        status: "warning",
        description: "Seluruh kolom harus diisi",
        isClosable: true,
        position: "top"
      })
    }
    const toastPromise = saveSomething(
      "",
      {
        mapel,
        jumlah,
        judul,
        note,
        img,
        customColor
      },
      setIsLoading, setCreateMapel, setOnSave
    )

    toast.promise(toastPromise, {
      success: value => ({ 
        title: 'Success', 
        description: value,
        isClosable: true,
        position: 'top',
        containerStyle: {
          zIndex: 9999
        },
        duration: 2000
      }),
      error: value => ({ 
        title: 'Oops!', 
        description: value,
        isClosable: true,
        position: 'top',
        containerStyle: {
          zIndex: 9999
        },
        duration: 2000
      }),
      loading: { title: 'Loading', description: "Tunggu sebentar", position: "top", isClosable: true},
    })
  }

  function handleImage(){
    const imageContainer = document.getElementById("inputContainer")
    const image = document.getElementById("inputImage")
    const toRemove = document.getElementById("toRemove")
    toRemove.style.display ="none"
    imageContainer.style.display = "block"
    const imageURL = URL.createObjectURL(image.files[0])
    imageContainer.src = imageURL
    console.log(imageURL)
    setImg(imageURL)
  }

  return (
    <Flex pt={4} flexDir={{base: "column"}} gap={{base: 5}} pos={"relative"} alignItems={"center"} minH={"fit-content"}>
      
      <Flex bg={cardBg} w={{base: "100%", lg: "100%"}} rounded={"2xl"} overflow={"hidden"} gap={{base:0, lg: 5}} h={"fit-content"} boxShadow={"lg"} flexDir={{base:"column", lg:"row"}}>
          <Flex p={4} flexDir={"column"} w={{lg: "40%"}}>
            <Heading fontSize={"2xl"}>Buat Mata Pelajaran</Heading>
            <Flex flexWrap={"wrap"} mt={3} gap={8}>
              <FormControl isRequired>
                <FormLabel>Nama Mata Pelajaran</FormLabel>
                <Input type='text' size={"sm"} rounded={"xl"} placeholder='ex: MATEMATIKA/FISIKA/dll' onChange={(e) => setMapel(e.target.value)}/>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Jumlah Soal</FormLabel>
                <Input type='tel' size={"sm"} rounded={"xl"} placeholder='ex: 10' onChange={(e) => setJumlah(e.target.value)}/>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Judul</FormLabel>
                <Input type='text' size={"sm"} rounded={"xl"} placeholder='ex: QUIZ MTK UNTUK SEMUA' onChange={(e) => setJudul(e.target.value)}/>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Note</FormLabel>
                <Input type='text' size={"sm"} rounded={"xl"} placeholder='ex: Jangan dibocorkan' onChange={(e) => setNote(e.target.value)}/>
                <FormHelperText>mohon di isi sesigkatnya. (maximal 4 kata)</FormHelperText>
              </FormControl>

              <FormControl>
                <FormLabel w={"160px"} h={"260px"} display={"flex"} flexDir={"column"} alignItems={"center"} 
                justifyContent={"center"} margin={"auto"} border={"1px solid black"} rounded={"xl"} htmlFor='inputImage' overflow={"hidden"}>
                  <Image id='inputContainer' objectFit={"cover"} w={"full"} h="full" display={"none"}/>
                  <Flex flexDir={"column"} alignItems={"center"} id='toRemove'>
                    <AiOutlinePicture size={30} />
                    <Text fontSize={"sm"} textAlign={"center"}>masukkan thumbnail quiz</Text>
                  </Flex>
                </FormLabel>
                <Input type='file' accept='image/png image/jpg image/jpeg image/webp' display={"none"} onChange={handleImage} id='inputImage'/>
              </FormControl>
              <Flex flexWrap={"wrap"} gap={2} m={"auto"} mt={3}>
                {pickColor.map((item, i) =>{
                  return <Button key={i} colorScheme='blue' variant={"outline"} size={"sm"} rounded={"lg"} onClick={(e) => setCustomColor(item.toLowerCase())}>
                    {item}
                  </Button>
                })}
            </Flex>
            </Flex>
          </Flex>
          <Divider orientation={{base:"horizontal", lg: "vertical"}}/>

          <Flex flexDir={"column"}>
            <Box mt={9} px={4}>
              <Text fontSize={"xl"} fontWeight={700}>Hasil Akhir</Text>
              <Mapel customColor={customColor} mapel={mapel} jumlah={jumlah} judul={judul} note={note} img={img}/>
            </Box>
            <Flex w={"full"} h={"full"} px={4} py={5} gap={2}>
              <Button mt={5} colorScheme='red' variant={"outline"}
                w={"full"} rounded={"lg"} onClick={()=> setCreateMapel(false)}>Cancel</Button>
              <Button mt={5} colorScheme='blue' variant={"outline"}
                w={"full"} rounded={"lg"} onClick={handleSaveMapel} isLoading={isLoading}>Save</Button>
            </Flex>
          </Flex>
            
      </Flex>
    </Flex>
  )
}

export default CreateMapel