import React, { useState } from 'react'
import NavBarAdmin from '../Components/NavBar/NavBarAdmin'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"

const MessageAdmin = () => {
    const [message, setmessages] = useState([])
    const [isloading, setisloading] = useState(false)
    


    const fetchdata = async () => {

    }
  return (
    <div className='flex flex-col min-h-screen bg-gray-100 '>
    <div className='flex flex-row h-screen'>
        <NavBarAdmin></NavBarAdmin> 
        <div className='flex-1 p-6 overflow-scroll '>
            <div className='w-full flex flex-col justify-center items-center'>
                <h1 className="w-full text-center font-bold my-4 text-3xl">Gestion de messages</h1>
            </div>
        <TableContainer component={Paper} >
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Nom</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Telephone</TableCell>
                        <TableCell>Message</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Nom</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Telephone</TableCell>
                        <TableCell>Message</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>

        </div>

    </div>
</div>
  )
}

export default MessageAdmin