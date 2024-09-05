import React, { useEffect, useState } from 'react'
import NavBarAdmin from '../../Components/NavBar/NavBarAdmin'
import {toast, Toaster } from 'react-hot-toast'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material';
import axios from 'axios';
import { RotateSpinner } from 'react-spinners-kit';
import { CgTrash } from 'react-icons/cg';
import { MdUpdate } from 'react-icons/md';




const Quiz = () => {
    const [isloading, setisloading] = useState(false)
    const [quizs, setquizs] = useState([])
    const [opencreation, setopencreation] = useState(false)
    const [question, setquestion] = useState()
    const [reponse, setreponse] = useState()
    const [categorie, setcategorie] = useState()
    const [idupdate, setidupdate] = useState()
    const [handleopenupdate, sethandleopenupdate] = useState(false)
    const handleclickopenupdate = (item) =>{
        setidupdate(item.id)
        setquestion(item.Question)
        setreponse(item.Reponse)
        setcategorie(item.Categorie)
        sethandleopenupdate(true)


    }
    const handleclickcloseupdate = () =>{
        sethandleopenupdate(false)
    }



    const handledelete = async (id) =>{
       setisloading(true)
        try {
            const response = await axios.delete("http://localhost:3001/quiz/delete/" + id)
            fetchers()
            toast.success("Votre quiz a été supprimé")
            setisloading(false)
        } catch (error) {
            toast.error("Quiz non supprimé")
        }
    }

    const update = async () =>{
        setisloading(true)
        try {
            await axios.put("http://localhost:3001/quiz/delete/" + idupdate)
            fetchers()
            setisloading(false)
            handleclickcloseupdate()
        } catch (error) {
            
        }
    }

    const handleclosecreation = () => {
        setopencreation(false)

    }
    const handleclickopencreation = () => {
        setopencreation(true)
    }
    const handleclickopenvalidation = async () => {
    setisloading(true)
    setTimeout( async () => {
        try {
            const response = await axios.post('http://localhost:3001/quiz/create', {Question:question, Reponse:reponse, Categorie:categorie})
            setisloading(false)
            fetchers()
            handleclosecreation()
        } catch (error) {
            setisloading(false)
            console.log(error)
        }
    }, 1000);
    }
    const fetchers = async () => {
        setisloading(true)
        setTimeout(async () => {
            try {
                const response = await axios.get("http://localhost:3001/quiz/getallquiz")
                setquizs(response.data)
                setisloading(false)

            } catch (error) {
                setisloading(false)
                console.log(error)
            }
        }, 2000);
    }
    useEffect(() => {
        fetchers()
    }, [])
    return (
        <div className='flex flex-col min-h-screen bg-gray-100 '>
            <div className='flex flex-row h-screen'>
                <NavBarAdmin></NavBarAdmin>
                <Toaster></Toaster>
                <div className='flex-1 p-6 overflow-scroll '>

                    <div className='w-full flex flex-col justify-start items-center'>
                        <div className='w-[80%] bg-white shadow-md shadow-gray-300 flex flex-row justify-between items-center p-4'>
                            <h1 className='text-start font-bold text-2xl '>
                                Gestion des Quiz
                            </h1>
                            <button onClick={handleclickopencreation} className='text-white bg-black px-3 py-2 font-medium text-center '>Ajouter</button>
                        </div>
                        <div className='w-[80%] my-3  '>
                            {isloading ? (
                                <div className='w-full flex flex-col justify-center items-center h-[200px] bg-white shadow-md shadow-gray-200'>
                                    <RotateSpinner color="#000" size={50}></RotateSpinner>
                                </div>
                            ) : (

                                <TableContainer component={Paper}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>id</TableCell>
                                                <TableCell align="left">Questions</TableCell>
                                                <TableCell align="left">Reponses</TableCell>
                                                <TableCell align="left">Categories</TableCell>
                                                <TableCell align="left">Action</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {quizs.map(item => {
                                                return (
                                                    <TableRow>
                                                        <TableCell>{item.id}</TableCell>
                                                        <TableCell align="left">{item.Question}</TableCell>
                                                        <TableCell align="left">{item.Reponse}</TableCell>
                                                        <TableCell align="left">{item.Categorie}</TableCell>
                                                        <TableCell align="left"><CgTrash className='text-red-500 text-2xl ' onClick={() => handledelete(item.id)}></CgTrash>
                                                        <MdUpdate onClick={()=>handleclickopenupdate(item)} className='text-cyan-500 text-2xl mx-2 '></MdUpdate>
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            )}


                        </div>
                    </div>

                </div>
                <Dialog open={opencreation} onClose={handleclosecreation}  >
                    <DialogTitle>
                        <h1 className='text-start font-bold text-2xl '>Ajouter un quiz </h1>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText className='w-[400px] '>
                            {isloading ? (
                                <div className="flex flex-col justify-center items-center w-full">

                                    <RotateSpinner size={50} ></RotateSpinner>
                                </div>
                            ) : (
                                <div className='w-full flex flex-col justify-start items-center '>
                                    <div className="w-full flex flex-col justify-start items-center">
                                        <label htmlFor="" className="text-start w-full ">Question</label>
                                        <input value={question} onChange={(e)=>setquestion(e.target.value)} type="text" className="w-full border-2 border-gray-200 py-2 px-2 my-2" />
                                    </div>
                                    <div className="w-full flex flex-col justify-start items-center">
                                        <label htmlFor="" className="text-start w-full ">Reponse</label>
                                        <input value={reponse} onChange={(e)=>setreponse(e.target.value)} type="text" className="w-full border-2 border-gray-200 py-2 px-2 my-2" />
                                    </div>
                                    <div className="w-full flex flex-col justify-start items-center">
                                        <label htmlFor="" className="text-start w-full ">Categorie</label>
                                        <input value={categorie} onChange={(e)=>setcategorie(e.target.value)} type="text" className="w-full border-2 border-gray-200 py-2 px-2 my-2" />
                                    </div>
                                    <button onClick={handleclickopenvalidation} className="w-full bg-black text-white my-2 text-center py-2">Créer</button>
                                </div>
                            )}

                        </DialogContentText>
                    </DialogContent>
                </Dialog>
                <Dialog open={handleopenupdate} onClose={handleclickcloseupdate}  >
                    <DialogTitle>
                        <h1 className='text-start font-bold text-2xl '>Ajouter un quiz </h1>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText className='w-[400px] '>
                            {isloading ? (
                                <div className="flex flex-col justify-center items-center w-full">

                                    <RotateSpinner size={50} ></RotateSpinner>
                                </div>
                            ) : (
                                <div className='w-full flex flex-col justify-start items-center '>
                                    <div className="w-full flex flex-col justify-start items-center">
                                        <label htmlFor="" className="text-start w-full ">Question</label>
                                        <input value={question} onChange={(e)=>setquestion(e.target.value)} type="text" className="w-full border-2 border-gray-200 py-2 px-2 my-2" />
                                    </div>
                                    <div className="w-full flex flex-col justify-start items-center">
                                        <label htmlFor="" className="text-start w-full ">Reponse</label>
                                        <input value={reponse} onChange={(e)=>setreponse(e.target.value)} type="text" className="w-full border-2 border-gray-200 py-2 px-2 my-2" />
                                    </div>
                                    <div className="w-full flex flex-col justify-start items-center">
                                        <label htmlFor="" className="text-start w-full ">Categorie</label>
                                        <input value={categorie} onChange={(e)=>setcategorie(e.target.value)} type="text" className="w-full border-2 border-gray-200 py-2 px-2 my-2" />
                                    </div>
                                    <button onClick={update} className="w-full bg-black text-white my-2 text-center py-2">Créer</button>
                                </div>
                            )}

                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default Quiz