import React, { useEffect, useState } from 'react'
import NavBarAdmin from '../Components/NavBar/NavBarAdmin'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import axios from "axios"
import {RotateSpinner} from 'react-spinners-kit'
import { FaRegTrashAlt } from "react-icons/fa"
import {toast, Toaster} from 'react-hot-toast'


const MessageAdmin = () => {
    const [message, setmessages] = useState([])
    const [isloading, setisloading] = useState(false)
    const [open, handleopen] = useState(false)
    const [openvalidation, handleopenvalidation] = useState(false)
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [idmessage, setid] = useState()
    const [isok, setisok] = useState()
    
    
    const deletemessage = async () => {
        try {
            const response = await axios.delete("http://localhost:3001/message/deletemessage/" + idmessage);
        } catch (error) {
            toast.error('Suppression echouée!',{
                duration: 3000,
                position: 'top-center',
                style: {
                  background: 'red',
                  color: 'white',
                },
              });
        }
    }


    const handleclickopen = (id) =>{
        setid(id)
        handleopen(true)

    }
    
    const handleclose = () =>{
        handleopen(false)
    }

    const handleclickopenvalidation = () =>{
        if (isok.trim() === "Oui je suis sur"){
            setisloading(true)
            handleopenvalidation(true)
    
            
            setTimeout(() => {
                setisloading(false)
            }, 2000);
        
        }
        else{
            toast.error('Mots incompatible!',{
                duration: 3000,
                position: 'top-center',
                style: {
                  background: 'red',
                  color: 'white',
                },
              }); 
        }

    }
    
    const handleclosevalidation = () =>{
        handleopenvalidation(false)
    }



    const handleSubmit = async() => {
        setisloading(true)
        setTimeout(async() => {
          try {
            const response = await axios.post("http://localhost:3001/auth/login", {
              email,password 
            })
            toast.success('Suppression réussie!',{
              duration: 3000,
              position: 'top-center',
              style: {
                background: '#34D36F',
                color: 'white',
              },
            });
            
            setisloading(false)
            deletemessage() 
            handleclosevalidation()
            handleclose()
            fetchdata()
          } catch (error) {
            toast.error('Connexion echouée!',{
              duration: 3000,
              position: 'top-center',
              style: {
                background: 'red',
                color: 'white',
              },
            });
            setisloading(false)
          }
        }, 3000);
        
        
        
      }

    const fetchdata = async () => {
        setisloading(true)
        setTimeout(async () => {
            try {
                const response = await axios.get("http://localhost:3001/message/getallmessage") 
                setisloading(false) 
                setmessages(response.data)
            } catch (error) {
                
            }
        }, 3000);
    }
    useEffect(()=>{
        fetchdata()
    },[axios])
  return (
    <div className='flex flex-col min-h-screen bg-gray-100 '>
    <div className='flex flex-row h-screen'>
        <NavBarAdmin></NavBarAdmin> 
        <Toaster></Toaster>
        <div className='w-full flex-1 p-6 overflow-scroll '>
            <div className='w-full flex flex-col justify-center items-center'>
                <h1 className="w-full text-center font-bold my-4 text-3xl">Gestion de messages</h1>
            </div>
            {isloading ? (
                <div className='w-full h-[200px] bg-white flex flex-row justify-center items-center text-center '>
                <RotateSpinner className='flex flex-row justify-center items-center w-full mx-auto float-right' size={45} color="#000"  ></RotateSpinner>
            </div>
                    ):(
        <TableContainer className='w-full' component={Paper} >
            <Table className='w-full' >
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Nom</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Telephone</TableCell>
                        <TableCell>Message</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className='w-full'>
                    
                        {message.map(item=>{
                            return(
                                
                                <TableRow>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.nom}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.telephone}</TableCell>
                                    <TableCell>{item.message}</TableCell>
                                    <TableCell><FaRegTrashAlt onClick={() => handleclickopen(item.id)} className='text-red-500 text-2xl'></FaRegTrashAlt></TableCell>
                                </TableRow>
                            )
                        })}
                    
                    </TableBody>
            </Table>
        </TableContainer>
                    )}
        </div>
                    <Dialog open ={open} onClose={handleclose}  >
                        <DialogTitle>
                            <h1 className='text-start font-bold text-2xl '>
                                Etes-vous sûr ?
                            </h1>
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText className='w-[400px] '>
                                <div className='w-full flex flex-col justify-center items-center'>
                                    <h1 className='w-[300px] px-2 py-1 text-center bg-red-100 text-red-600 my-2'>
                                        Tape: Oui je suis sûr
                                    </h1>
                                    <input value={isok} onChange={(e) => setisok(e.target.value)} type="text" className='w-[300px] px-2 py-1 text-gray-500 border-2 border-gray-300 rounded my-1 ' />
                                    <div className='w-full flex flex-row justify-center items-center'>
                                    <button onClick={handleclose} className="text-white bg-black px-2 py-2 text-center mx-2 my-1 font-bold">Fermer</button>
                                    <button onClick={handleclickopenvalidation} className="text-white bg-black px-2 py-2 text-center mx-2 my-1 font-bold">Valider</button>

                                    </div>
                                </div>
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>

                    <Dialog open ={openvalidation} onClose={handleclosevalidation}  >
                        <DialogTitle>
                            <h1 className='text-start font-bold text-2xl '>
                                Entrez vos données d'authentification
                            </h1>
                        </DialogTitle>
                        <DialogContent>
                        
                        {isloading ? (
                            <div className='w-[400px] h-[200px] bg-white flex flex-row justify-center items-center text-center '>
                            <RotateSpinner className='flex flex-row justify-center items-center w-full mx-auto float-right' size={45} color="#000"  ></RotateSpinner>
                        </div>
                        ):(
                            <>
                            <DialogContentText className='w-[400px] '>
                                <div className='w-full flex flex-col justify-center items-center'>
                                    <h1 className='w-[300px] px-2 py-1 text-center bg-red-100 text-red-600 my-2'>
                                        Entrez Email/Password
                                    </h1>
                                    <input value={email} onChange={(e) => setemail(e.target.value)} type="email" className='w-[300px] px-2 py-1 text-gray-500 border-2 border-gray-300 rounded my-1 ' />
                                    <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" className='w-[300px] px-2 py-1 text-gray-500 border-2 border-gray-300 rounded my-1 ' />
                                    <div className='w-full flex flex-row justify-center items-center'>
                                    <button onClick={handleclosevalidation} className="text-white bg-black px-2 py-2 text-center mx-2 my-1 font-bold">Fermer</button>
                                    <button onClick={handleSubmit} className="text-white bg-black px-2 py-2 text-center mx-2 my-1 font-bold">Valider</button>

                                    </div>
                                </div>
                            </DialogContentText>
                            
                            </>
                        )}
                        </DialogContent>
                    </Dialog>
    </div>
</div>
  )
}

export default MessageAdmin