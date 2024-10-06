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
import { useContext } from "react";
import Dashboard from "./AdminPage/Dashboard";

function Admin() {
    const {setShowBottomNavbar} = useContext(osis)

    setShowBottomNavbar(true)

    return(
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
                            <MenuItem icon={<MdDashboard />} command='⌘'>
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

                        <MenuItem icon={< MdArrowBackIos />} command='⌘' as={"a"} href="/">
                            Back
                        </MenuItem>
                    </MenuList>

                </Menu>
            </Box>
            <Box w={"full"}>
                <Dashboard />
            </Box>
        </Box>
    )
    
}

export default Admin