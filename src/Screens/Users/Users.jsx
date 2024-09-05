import React, { useEffect, useState } from 'react'
import NavBarAdmin from '../../Components/NavBar/NavBarAdmin'
import { ClapSpinner, RotateSpinner } from 'react-spinners-kit'
import { CgProfile } from "react-icons/cg";
import { FaTrashAlt } from "react-icons/fa";
import axios from 'axios';
import {toast, Toaster} from 'react-hot-toast';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { Checkmark } from 'react-checkmark'
import { SlGraph } from "react-icons/sl";



const Users = () => {
    const [admins, setadmins] = useState([])
    const [isloading, setisloading] = useState(false)
    const [open, handleopen] = useState(false)
    const [openvalidation, handleopenvalidation] = useState(false)
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [idmessage, setid] = useState()
    const [isok, setisok] = useState()
    const [opencreation, setopencreation] = useState(false)
    const [nom, setnom] = useState()
    const [prenom, setprenom] = useState()
    const [username, setusername] = useState()
    const [iscreated, setiscreated] = useState(false)


    const createadmin = async () =>{
        setisloading(true)
        setiscreated(false)

        setTimeout(async() => {
            try {
                const response = await axios.post("http://localhost:3001/auth/register", {
                    email, password, username, firstName:nom, lastName:prenom
                })
                setisloading(false)
                setiscreated(true)
                setTimeout(() => {
                    handleclosecreation()
                }, 3000);
                fetchdata()
            } catch (error) {
                console.log(error)
            }
        }, 3000);
    }

    const handleclickopencreation = () =>{
        
        setopencreation(true)

    }
    
    const handleclosecreation = () =>{
        setopencreation(false)
    }

    const authenticate = async () =>{
        setisloading(true)
        setTimeout(async () => {
            try {
                const response = await axios.post('http://localhost:3001/auth/login', {email, password})
                const deleter = await axios.delete('http://localhost:3001/user/deleteuser/' + idmessage)
                fetchdata()
                handleclosevalidation()
                toast.success('Suppression réussie!',{
                    duration: 3000,
                    position: 'top-center',
                    style: {
                      background: '#34D36F',
                      color: 'white',
                    },
                  });
                handleclose()
            } catch (error) {
                toast.error('Suppression admin echouée!',{
                    duration: 3000,
                    position: 'top-center',
                    style: {
                      background: 'red',
                      color: 'white',
                    },
                  });
            }
        }, 2000);
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





    const fetchdata = async () => {
        setisloading (true)
        setTimeout( async() => {
            try {
              const {data } = await axios.get('http://localhost:3001/user/getalluser')
              setadmins(data)  
              setisloading(false)
              toast.success('Données bien reçus !',{
                duration: 3000,
                position: 'top-center',
                style: {
                  background: '#34D36F',
                  color: 'white',
                },
              });
            } catch (error) {
                toast.error('Données pas reçus!',{
                    duration: 3000,
                    position: 'top-center',
                    style: {
                      background: 'red',
                      color: 'white',
                    },
                  });
            }
        }, 3000);

    }
    useEffect(() =>{
        fetchdata()
    },[axios])
  return (
    <div className='flex flex-col min-h-screen bg-gray-100 '>
    <div className='flex flex-row h-screen'>
        <NavBarAdmin></NavBarAdmin> 
        <Toaster></Toaster>
        <div className='flex-1 p-6 overflow-scroll '>
          <div className=' w-full flex flex-col justify-items-start items-center'>
            <div className=' bg-white w-[90%] flex flex-row justify-between py-3 px-2 items-center border-gray-300 shadow-mt shadow-gray-300 '>
            <h1 className=' text-center py-2 px-3 font-bold text-2xl rounded-xl '>Liste des utilisateurs</h1>
            </div>
            {isloading ? (
                <div className='w-[90%] flex flex-col justify-center items-center h-[400px] bg-white rounded-xl'>
                    <ClapSpinner size = {50} ></ClapSpinner>
                </div>
            ):(
                <>
                    <div className=' w-full flex flex-col justify-center items-center my-10 '>
                    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Profil</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Nom</TableCell>
            <TableCell align="left">Prenom</TableCell>
            <TableCell align="left">Score</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {admins.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
              <CgProfile className=' text-2xl mx-2 '></CgProfile>
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.prenom}</TableCell>
              <TableCell align="left">{row.nom}</TableCell>
              <TableCell align="left">{400}</TableCell>
              <TableCell align="left"> <FaTrashAlt className='text-red-500 text-2xl  ' onClick={() => handleclickopen(row.id)} ></FaTrashAlt> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                
</div>
                </>
            )}
          </div>

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
                                    <button onClick={authenticate} className="text-white bg-black px-2 py-2 text-center mx-2 my-1 font-bold">Valider</button>

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

export default Users