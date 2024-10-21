// ### Import package from node_modules
import React, { useContext, useState }from 'react'
import { Link, useNavigate } from 'react-router-dom';

// ### Import package from chakra ui
import { 
    Box,
    Text,
    Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  useDisclosure
 } from '@chakra-ui/react'

// ### Import icons from node_modules
import { GoHome } from "react-icons/go";
import { CiSquarePlus } from "react-icons/ci";
import { GrSearchAdvanced } from "react-icons/gr";
import { HiOutlineTrophy } from "react-icons/hi2";
import { MdHowToVote } from "react-icons/md";
import { MdOutlineHowToVote } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GoShieldLock } from 'react-icons/go';


// import libs
import { isAuthFromCookie } from '../../../lib/libs';
import Cookies from "js-cookie"

// import context osis from App.jsx
import { osis } from '../../App';

// import style
import "./navbar.css"

function BottomNavContent() {
    // Declaration Hooks
    const {colorMode, setIsAuth, isAuth, showBottomNavbar} = useContext(osis)
    const [authText, setAuthText] = useState("")
    const [adminPage, setAdminPage] = useState(false)
    const { isOpen, onToggle, onClose } = useDisclosure()
    const navigate = useNavigate()

    function handleVoting(){
        const AuthFromCookie = isAuthFromCookie("auth", setIsAuth, Cookies)
        if(AuthFromCookie && isAuth) {
            navigate("/voting")
        } else{
            setAuthText("Looks like you are not SMA Sultan Agung student or you haven't logged in yet.")
            setAdminPage(false)
            onToggle()
        }
    }

    function handleAdminPage(){
        const isOsis = Cookies.get("isOsis") === "true"
        if(isOsis && isAuth){
            navigate("/admin")
        }else{
            setAuthText("Sorry this feature isn't available yet.")
            setAdminPage(true)
            onToggle()
        }
    }
    
  return (
    <>
    <Popover
    returnFocusOnClose={false}
    isOpen={isOpen}
    onClose={onClose}
    placement="top"
    closeOnBlur={false}>
        <PopoverTrigger>
        <Box className='nav' px={{base: 4, lg: 3}} gap={{base: 7, lg: 5}} py={{base: 0.5, lg:1}}  alignItems={{base: "center", lg: "start"}} display={showBottomNavbar ? "flex" : "none"}
        rounded={"3xl"} fontWeight={700} h={{base: "fit-content", lg: "40px"}} bgGradient={colorMode == "light"? "linear(to-r, gray.100, white, gray.100)" : "linear(to-r, black, gray.800, black)"}>
        <Link to={"/"}>
            <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
                <GoHome size={23} className='navicon'/>
                <Text fontSize={{base: "13px", lg: "8px"}} lineHeight={{base: 1, lg: 0}}>
                    Home
                </Text>
            </Box>
        </Link>

        <Link to={"/explore"}>
            <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
                <GrSearchAdvanced size={23} className='navicon' />
                <Text fontSize={{base: "13px", lg: "8px"}} lineHeight={{base: 1, lg: 0}}>
                    Explore
                </Text>
            </Box>
        </Link>

        <Box onClick={handleAdminPage}>
            <GoShieldLock size={35} className='navicon-mid' cursor={"pointer"}/>
        </Box>

        <Box display={"flex"} flexDir={"column"} alignItems={"center"} onClick={handleVoting} cursor={"pointer"}>
            <MdOutlineHowToVote size={23} className='navicon'/>
            <Text fontSize={{base: "13px", lg: "8px"}} lineHeight={{base: 1, lg: 0}}>
                Voting
            </Text>
        </Box>

        <Link to={"/event"}>
            <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
                <HiOutlineTrophy size={23} className='navicon'/>
                <Text fontSize={{base: "13px", lg: "8px"}} lineHeight={{base: 1, lg: 0}}>
                    Event
                </Text>
            </Box>
        </Link>

        </Box>
        </PopoverTrigger>

                <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader>Oops...</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody display={"flex"} flexDir={"column"} gap={3}>
                        <Text opacity={0.5}>{authText}</Text>
                        {
                            !adminPage && 
                            <Link to={"/login"} >
                                <Button colorScheme='blue' w={"full"} onClick={onClose}>
                                    Login
                                </Button>
                            </Link>
                        }
                    </PopoverBody>
                </PopoverContent>

        </Popover>



    {/* <Box className='nav' px={{base: 4, lg: 3}} gap={{base: 7, lg: 5}} py={{base: 0.5, lg:1}}  alignItems={{base: "center", lg: "start"}} display={{base: "flex", lg: "none"}}
        rounded={"3xl"} fontWeight={700} h={{base: "fit-content", lg: "40px"}} bgGradient={colorMode == "light"? "linear(to-r, gray.100, white, gray.100)" : "linear(to-r, black, gray.800, black)"}>
        <Link to={"/"}>
            <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
                <GoHome size={23} className='navicon'/>
                <Text fontSize={{base: "13px", lg: "8px"}} lineHeight={{base: 1, lg: 0}}>
                    Home
                </Text>
            </Box>
        </Link>

        <Link to={"/explore"}>
            <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
                <GrSearchAdvanced size={23} className='navicon' />
                <Text fontSize={{base: "13px", lg: "8px"}} lineHeight={{base: 1, lg: 0}}>
                    Explore
                </Text>
            </Box>
        </Link>

        <Link to={"/admin"}>
            <GoShieldLock size={35} className='navicon-mid' cursor={"pointer"}/>
        </Link>

        <Link to={"/voting"} onClick={onToggle}> 
            <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
                <MdOutlineHowToVote size={23} className='navicon'/>
                <Text fontSize={{base: "13px", lg: "8px"}} lineHeight={{base: 1, lg: 0}}>
                    Voting
                </Text>
            </Box>
        </Link>

        <Link to={"/event"}>
            <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
                <HiOutlineTrophy size={23} className='navicon'/>
                <Text fontSize={{base: "13px", lg: "8px"}} lineHeight={{base: 1, lg: 0}}>
                    Event
                </Text>
            </Box>
        </Link>
        </Box> */}
    </>
    
  )
}

export default BottomNavContent