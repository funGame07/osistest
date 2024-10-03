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

function Admin() {
    const {setShowBottomNavbar} = useContext(osis)

    setShowBottomNavbar(false)

    return(
        <Box mt={20} minH={"100vh"} px={2}  display={"flex"}>
            <Box pos={"fixed"} zIndex={999}>
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
                            <MenuItem icon={<FaBook />} command='⌘'>
                                Mata Pelajaran
                            </MenuItem>
                            <MenuItem icon={<FaRegCircleQuestion />} command='⌘'>
                                Pertanyaan
                            </MenuItem>
                            <MenuItem icon={<MdRestartAlt />} command='⌘'>
                                Testing
                            </MenuItem>
                            <MenuItem icon={<VscRunAll />} command='⌘'>
                                Mulai Quiz
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
            <Box m={"auto"}>
                <Question />
            </Box>
        </Box>
    )
    
}

export default Admin
