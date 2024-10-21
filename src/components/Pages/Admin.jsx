import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { 
    Box,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Text
 } from "@chakra-ui/react"
 import { IoMenu } from "react-icons/io5";
 import { MdDashboard } from "react-icons/md";
 import { FaRegCircleQuestion } from "react-icons/fa6";
 import { FaBook } from "react-icons/fa";
 import { IoDocumentAttach } from "react-icons/io5";
 import { FaInvision } from "react-icons/fa";
 import { MdHowToVote } from "react-icons/md";
 import { IoIosCompass } from "react-icons/io";
 import { MdRestartAlt } from "react-icons/md";
 import { VscRunAll } from "react-icons/vsc";
import Question from "./AdminPage/Question";
import { MdArrowBackIos } from "react-icons/md";
import { osis } from "../../App";
import Dashboard from "./AdminPage/Dashboard";

import Cookies from "js-cookie"

import { isAuthFromDB } from "../../../lib/libs";

function Admin() {
    const {setShowBottomNavbar, isAuth, setIsAuth} = useContext(osis)
    const [isOsis, setIsOsis] = useState(false)
    const navigate = useNavigate()

    useEffect( ()=>{
        async function authFromDB(){
            const response = await isAuthFromDB(Cookies, import.meta.env.VITE_SERVER_URI + "/api/auth/auth")
            setIsAuth(response)

            const isOsis = Cookies.get("isOsis")
            if(isOsis == "true" && response){
                setIsOsis(true)
            }else{
                setIsOsis(false)
                navigate("/")
        }
        }
        authFromDB()

        setShowBottomNavbar(true)
    }, [])

    return(
        <>
        {
        isOsis &&
        <Box py={20}>
            <Box zIndex={999} mx={1}>
                <Menu>
                    <MenuButton
                        colorScheme="yellow"
                        as={IconButton}
                        aria-label='Options'
                        icon={<IoMenu />}
                        variant='outline'
                    />
                    <MenuList>
                        <MenuGroup title="Quiz">
                            <MenuItem icon={<MdDashboard />} command='⌘' as={Link} to="/admin">
                                Dashboard
                            </MenuItem>
                            <MenuItem icon={<MdRestartAlt />} command='⌘'>
                                Testing
                            </MenuItem>
                        </MenuGroup>

                        <MenuDivider />

                        <MenuGroup title="Dokumentasi & Visi-Misi">
                            <MenuItem icon={<IoDocumentAttach />} command='⌘'>
                                Dokumentasi Lomba
                            </MenuItem>
                            <MenuItem icon={<FaInvision />} command='⌘'>
                                Visi-Misi
                            </MenuItem>
                        </MenuGroup>

                        <MenuDivider />
                        
                        <MenuGroup title="Voting">
                            <MenuItem icon={< MdHowToVote />} command='⌘'>
                                Voting
                            </MenuItem>
                        </MenuGroup>

                        <MenuDivider />
                        
                        <MenuGroup title="Explore">
                            <MenuItem icon={< IoIosCompass />} command='⌘'>
                                Tambah Konten
                            </MenuItem>
                        </MenuGroup>

                        <MenuDivider />

                        <MenuItem icon={< MdArrowBackIos />} command='⌘' as={Link} to="/">
                            Back
                        </MenuItem>
                    </MenuList>

                </Menu>
            </Box>
            <Box w={"full"}>
                <Dashboard />
            </Box>
        </Box>
        }
        </>
        
    )
    
}

export default Admin