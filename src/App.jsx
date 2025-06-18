import React, { useState } from 'react'
import './App.css'
import image1 from './assets/logo 1.png'
import image2 from './assets/Frame 38469.png'
import image3 from './assets/Frame 38435.png'
import image4 from './assets/Rectangle 6 (2).png'
import image5 from './assets/Frame 38483.png'
import image6 from './assets/Frame 10.png'
import image7 from './assets/Dropbox_logo_2017 1.png'
import image8 from './assets/Frame 38577.png'
import image9 from './assets/Layer_2.png'
import image10 from './assets/Layer_2 (1).png'
import image11 from './assets/Group (6).png'
import image12 from './assets/Star 11.png'
import image13 from './assets/Rectangle 11 (1).png'
import image14 from './assets/Mask group.png'
import image15 from './assets/Rectangle 10 (2).png'
import image16 from './assets/Mask group (1).png'
import image17 from './assets/Frame 140.png'
import image18 from './assets/Frame 141.png'
import image19 from './assets/Frame 142.png'
import image20 from './assets/Frame 38498.png'
import image21 from './assets/Frame 38498 (1).png'
import image22 from './assets/Frame 38512.png'
import image23 from './assets/Frame 38498 (2).png'
import image24 from './assets/Frame 38508.png'
import image25 from './assets/Frame 38509.png'
import image26 from './assets/Frame 38510.png'
import image27 from './assets/Frame 38511.png'
import image28 from './assets/Hotel boking.png'
import image29 from './assets/অ্যাপ.png'
import image30 from './assets/Hotel boking (1).png'
import image31 from './assets/Frame 38579.png'
import image32 from './assets/Ellipse 378.png'
import image33 from './assets/Ellipse 378 (1).png'
import image34 from './assets/Ellipse 378 (2).png'
import image35 from './assets/Frame 38569.png'
import image36 from './assets/ci_location.png'
import image37 from './assets/Frame 183.png'
import image38 from './assets/ic_baseline-email.png'
import image39 from './assets/Frame 38552.png'
import image40 from './assets/Frame 38594.png'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { use } from 'react'


const App = () => {

  let [products,setProducts] = useState([
    {
      img : image20,
      name : 'Product Management',
      des : 'vacancy available 20',
      id : 1
    },
    {
      img : image21,
      name : 'Web & Mobile Development',
      des : 'vacancy available 20',
      id : 2
    },
    {
      img : image27,
      name : 'Brochures & Flyers',
      des : 'vacancy available 20',
      id : 3
    },
    {
      img : image22,
      name : 'Logo & name cards',
      des : 'vacancy available 20',
      id : 4
    },
    {
      img : image23,
      name : 'Marketing &  Commuication',
      des : 'vacancy available 20',
      id : 5
    },
    {
      img : image24,
      name : 'Business Development',
      des : 'vacancy available 20',
      id : 6
    },
    {
      img : image25,
      name : 'Human Resources',
      des : 'vacancy available 20',
      id : 7
    },
    {
      img : image26,
      name : 'Infographics & Illustrations',
      des : 'vacancy available 20',
      id : 8
    }
  ])

  function deleteUser(id) {
    products = products.filter((e) => e.id != id)
    setProducts(products)
  }

  let [addModal,setAddModal] = useState(false)

  const handleClickOpen = () => {
    setAddModal(true);
  };

  const handleClose = () => {
    setAddModal(false);
  };

  let [inpImage,setInpImage] = useState("")
  let [inpName,setInpName] = useState("")
  let [inpDes,setInpDes] = useState("")

  function addNewProducts() {
    let newProducts = {
      img : inpImage,
      name : inpName,
      des : inpDes,
      id : Date.now()
    }
    setProducts([...products,newProducts])
    setAddModal(false)
    setInpImage('')
    setInpName('')
    setInpDes('')
  }

  let [search,setSearch] = useState('')

  let [editModal,setEditModal] = useState(false)

  const handleEditClickOpen = (e) => {
    setInpEditImage(e.img)
    setInpEditName(e.name)
    setInpEditDes(e.des)
    setIdx(e.id)
    setEditModal(true)
  };

  const handleEditClose = () => {
    setEditModal(false);
  };

  let [inpEditImage,setInpEditImage] = useState("")
  let [inpEditName,setInpEditName] = useState("")
  let [inpEditDes,setInpEditDes] = useState("")
  let [idx,setIdx] = useState(null)

  function editNewProducts() {
    let editProducts = products.map((e) => {
      if(e.id == idx) {
        return {
          ...e,
          img : inpEditImage,
          name : inpEditName,
          des : inpEditDes
        }
      }
      return e
    })
    setProducts(editProducts)
    setEditModal(false)
  }

  let [infoModal,setInfoModal] = useState(false)
  let [allProducts,setAllProducts] = useState(null)

  const handleClickOpenInfo = (e) => {
    setAllProducts(e)
    setInfoModal(true);
  };

  const handleCloseInfo = () => {
    setInfoModal(false);
  };

  return (
    <div className='bg-[#F3F4F6]'>

<Dialog 
        open={infoModal}
        onClose={handleCloseInfo}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        <h1 className='text-center py-[25px] font-bold'>Product Info</h1>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <div className='flex flex-col gap-[35px] '>
            {allProducts && (
              <div className='flex flex-col items-center gap-[25px]'>
                <img src={allProducts.img} alt="" />
                <h1><b>NAME : </b>{allProducts.name} </h1>
                <p><b>DESCRIPTION : </b>{allProducts.des} </p>
              </div>
            )}
          </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseInfo()}>CLOSE</Button>
        </DialogActions>
      </Dialog>


    <div className='bg-[#101C26] text-[white] h-[120vh]'>

      <div className='flex items-center p-[20px] justify-between'>
        <img src={image1} alt="" />
        <div className='flex items-center gap-[30px]'>
          <p className='text-[#BAB9B9] font-bold'>Home</p>
          <p className='text-[#BAB9B9] font-bold'>Project</p>
          <p className='text-[#BAB9B9] font-bold'>About</p>
          <p className='text-[#BAB9B9] font-bold'>Blog</p>
          <p className='text-[#BAB9B9] font-bold'>Contact</p>
        </div>
        <div className='flex items-center gap-[20px]'>
        <Button style={{'backgroundColor' : '#101C26', 'color' : '#CECECE', 'padding' : '6px 30px','fontSize' : '14px','fontWeight' : 'bold','borderRadius' : '25px'}} variant="outlined">Sign in</Button>
        <Button style={{'backgroundColor' : '#F0E714', 'color' : '#101C26', 'padding' : '6px 30px','fontSize' : '14px','fontWeight' : 'bold','borderRadius' : '25px'}} className='btn2' variant="outlined">Sign up</Button>
        </div>
      </div>

      <div className='w-[90%] m-auto flex items-center justify-around mt-[80px] '>
        <div className='flex flex-col gap-[30px] items-start w-[540px]'>
          <h1 className='text-[#F3F4F6] text-[55px] font-[700]'>We’re a Creative 
          Design Agency</h1>
          <p className='text-[#F3F4F6] text-[18px] w-[420px] leading-[35px]'>We are delivering top level digital services 
          best experlenced team, just get stared </p>
          <div className='flex gap-[70px] items-center'>
          <Button style={{'backgroundColor' : '#F0E714', 'color' : '#101C26', 'padding' : '6px 20px','fontSize' : '14px','fontWeight' : 'bold','borderRadius' : '25px'}} className='btn2' variant="outlined">Get Started ➡️</Button>
          <button className='text-[18px] font-[500]'>How it works</button>
          </div>
          <img className='mt-[20px]' src={image5} alt="" />
        </div>
        <img className='w-[650px]' src={image4} alt="" />
      </div>
      <img className='absolute top-[70%] left-[21%]' src={image2} alt="" />
      <img className='absolute top-[50%] left-[35%]' src={image12} alt="" />
      <img className='absolute top-[60%] left-[44%]' src={image3} alt="" />


      <div className='w-[90%] m-auto flex justify-around mt-[90px] items-center'>
        <img src={image6} alt="" />
        <img src={image7} alt="" />
        <img src={image8} alt="" />
        <img src={image9} alt="" />
        <img src={image10} alt="" />
        <img src={image11} alt="" />
      </div>

    </div>

    <div className='mt-[120px] w-[90%] m-auto flex justify-around items-center mb-[100px] '> 
      <img className='z-[5]' src={image13} alt="" />
      <div className='w-[600px] flex flex-col gap-[25px] items-start'>
      <Button style={{'backgroundColor' : '#F0E71433', 'color' : '#101C26', 'padding' : '6px 30px','fontSize' : '14px','fontWeight' : 'bold','borderRadius' : '25px'}} className='btn2' variant="outlined">About us</Button>
      <h1 className='text-[#24272E] text-[44px] font-[600]'>We are skilled in providing superior services</h1>
      <p className='text-[#555C68] text-[18px] w-[500px] leading-[35px]'>Customer satisfaction is such a key part of many successful businesses. Most companies have</p>
      <Button style={{'backgroundColor' : '#24272E', 'color' : '#F0E714', 'padding' : '6px 20px','fontSize' : '14px','fontWeight' : 'bold','borderRadius' : '25px'}} className='btn2' variant="outlined">Read More ➡️</Button>
      </div>
    </div>
    <img className='absolute top-[177%] left-[4%]' src={image14} alt="" />

    <div className='mt-[200px] w-[90%] m-auto flex justify-around items-center mb-[100px] '> 
      <div className='w-[600px] flex flex-col gap-[25px] items-start'>
      <Button style={{'backgroundColor' : '#F0E71433', 'color' : '#101C26', 'padding' : '6px 30px','fontSize' : '14px','fontWeight' : 'bold','borderRadius' : '25px'}} className='btn2' variant="outlined">Why choose us</Button>
      <h1 className='text-[#24272E] text-[44px] font-[600]'>Expert advising clients On financial challenges</h1>
      <p className='text-[#555C68] text-[18px] w-[500px] leading-[35px]'>Customer satisfaction is such a key part of many successful businesses. Most companies have</p>
      <div className='flex items-center gap-[30px]'>
        <img src={image17} alt="" />
        <div className='w-[340px] flex flex-col gap-[10px]'>
          <h3 className='text-[#24272E] font-bold text-[17px]'>Frist working process</h3>
          <p className='text-[#555C68] text-[16px]'>Customer satisfaction is such a key part of many successful businesses.</p>
        </div>
      </div>
      <div className='flex items-center gap-[30px]'>
        <img src={image18} alt="" />
        <div className='w-[340px] flex flex-col gap-[10px]'>
          <h3 className='text-[#24272E] font-bold text-[17px]'>Dedicated Team</h3>
          <p className='text-[#555C68] text-[16px]'>business model that refers to an agreement between the client and service provider,  </p>
        </div>
      </div>
      <div className='flex items-center gap-[30px]'>
        <img src={image19} alt="" />
        <div className='w-[340px] flex flex-col gap-[10px]'>
          <h3 className='text-[#24272E] font-bold text-[17px]'>24/7 Hours Support</h3>
          <p className='text-[#555C68] text-[16px]'>Scaling your team to provide assistance around the clock might sound like a   </p>
        </div>
      </div>
      </div>
      <img className='z-[1]' src={image15} alt="" />
    </div>
    <img className='absolute left-[85%] top-[295%]' src={image16} alt="" />


    <div className='w-[70%] m-auto items-center text-center mt-[180px] flex flex-col gap-[15px] mb-[120px]'>
    <Button style={{'backgroundColor' : '#F0E71433', 'color' : '#101C26', 'padding' : '6px 30px','fontSize' : '14px','fontWeight' : 'bold','borderRadius' : '25px'}} className='btn2' variant="outlined">OUR SEARVICES</Button>
    <h1 className='text-[#24272E] text-[44px] font-[600] w-[490px]'>What Creative Design We Offer</h1>
    <p className='text-[#555C68] text-[18px] w-[600px]'>Business owners and managers lead by example. The values and work ethic displayed by a company's decision makers have a direct ...</p>
    </div>

    <div className='w-[90%] m-auto flex justify-between mb-[70px]'>
      <input value={search} onChange={(e) => setSearch(e.target.value)} className='border px-[75px] py-[8px] rounded-xl font-bold' placeholder='🔍 Search...' type="text" />
      <button onClick={() => handleClickOpen()} className='border px-[10px] py-[8px] rounded-xl bg-[blue] text-[white] font-bold cursor-pointer'> + Add New Products</button>
    </div>

    <Dialog 
        open={addModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <h1 className='text-center py-[25px] font-bold'>Add New Products</h1>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <div className='flex flex-col gap-[35px] '>
            <input value={inpImage} onChange={(e) => setInpImage(e.target.value)} className='border px-[50px] py-[10px] rounded-xl font-bold' type="text" placeholder='Image...' />
            <input value={inpName} onChange={(e) => setInpName(e.target.value)} className='border px-[50px] py-[10px] rounded-xl font-bold' type="text" placeholder='Name...' />
            <input value={inpDes} onChange={(e) => setInpDes(e.target.value)} className='border px-[50px] py-[10px] rounded-xl font-bold' type="text" placeholder='Description...' />
          </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()}>CLOSE</Button>
          <Button onClick={() => addNewProducts()}  autoFocus>
            SAVE
          </Button>
        </DialogActions>
      </Dialog>

    <div className='w-[90%] m-auto flex flex-wrap justify-between items-center'>
      {products.filter((e) => e.name.toLowerCase().includes(search.toLowerCase())).map((e) => {
        return (
          <div key={e.id} className='w-[300px] h-[260px] shadow-2xl flex flex-col items-start p-[15px] justify-around rounded-xl mb-[80px]'>
            <img className='w-[58px] h-[58px]' src={e.img} alt="" />
            <h2 className='text-[#24272E] font-bold text-[25px]'>{e.name}</h2>
            <p className='text-[#555C68] text-[18px] font-[500]'>{e.des}</p>
            <div className='flex items-center gap-[30px]'>
            <IconButton onClick={() => deleteUser(e.id)} aria-label="delete" size="large">
        <DeleteIcon fontSize="inherit" />
      </IconButton>
      <button onClick={() => handleClickOpenInfo(e)} className='hover:text-[green] cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg></button>
      <button onClick={() => handleEditClickOpen(e)} className='hover:text-[blue] cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" /></svg></button>
            </div>
          </div>
        )
      })}
    </div>

    <Dialog 
        open={editModal}
        onClose={handleEditClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <h1 className='text-center py-[25px] font-bold'>Edit Products</h1>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <div className='flex flex-col gap-[35px] '>
            <input value={inpEditImage} onChange={(e) => setInpEditImage(e.target.value)} className='border px-[50px] py-[10px] rounded-xl font-bold' type="text" placeholder='Image...' />
            <input value={inpEditName} onChange={(e) => setInpEditName(e.target.value)} className='border px-[50px] py-[10px] rounded-xl font-bold' type="text" placeholder='Name...' />
            <input value={inpEditDes} onChange={(e) => setInpEditDes(e.target.value)} className='border px-[50px] py-[10px] rounded-xl font-bold' type="text" placeholder='Description...' />
          </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleEditClose()}>CLOSE</Button>
          <Button onClick={() => editNewProducts()}  autoFocus>
            SAVE
          </Button>
        </DialogActions>
      </Dialog>

      <div className='mt-[80px] w-[90%] m-auto flex items-center justify-between mb-[100px]'>
        <div>
        <Button style={{'backgroundColor' : '#F0E71433', 'color' : '#101C26', 'padding' : '6px 30px','fontSize' : '14px','fontWeight' : 'bold','borderRadius' : '25px'}} className='btn2' variant="outlined">READY TO USE</Button>
        <h1 className='text-[#24272E] text-[44px] font-[600] w-[480px]'>Elegant And Impressive  Inner Pages</h1>
        </div>
        <img src={image31} alt="" />
      </div>

      
      <div className='w-[90%]  m-auto flex items-center gap-[50px] overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide py-4 mb-[150px]'>
        <div className='w-[510px] flex flex-col items-start gap-[10px] '>
          <img  src={image28} alt="" />
          <h1 className='text-[#24272E] text-[28px] font-[500]'>Hotel Booking  Website</h1>
          <p className='text-[#555C68] text-[18px] font-[500]   w-[500px]'>Business owners and managers lead by example.<br/> The  values and work ethic displayed by a</p>
          <p className='text-[#24272E] font-bold'>Read Case Study ➡️</p>
        </div>
        <div className='w-[510px] flex flex-col items-start gap-[10px]'>
          <img src={image29} alt="" />
          <h1 className='text-[#24272E] text-[28px] font-[500]'>UI/UX  App Design</h1>
          <p className='text-[#555C68] text-[18px] font-[500]  w-[500px]'>Business owners and managers lead by example.<br/> The values and work ethic displayed by a</p>
          <p className='text-[#24272E] font-bold'>Read Case Study ➡️</p>
        </div>
        <div className='w-[510px] flex flex-col items-start gap-[10px]'>
          <img src={image28} alt="" />
          <h1 className='text-[#24272E] text-[28px] font-[500]'>Hotel Booking  Website</h1>
          <p className='text-[#555C68] text-[18px] font-[500]  w-[500px]'>Business owners and managers lead by example.<br/> The values and work ethic displayed by a</p>
          <p className='text-[#24272E] font-bold'>Read Case Study ➡️</p>
        </div>
        <div className='w-[510px] flex flex-col items-start gap-[10px]'>
          <img src={image29} alt="" />
          <h1 className='text-[#24272E] text-[28px] font-[500]'>UI/UX  App Design</h1>
          <p className='text-[#555C68] text-[18px] font-[500]  w-[500px]'>Business owners and managers lead by example.<br/> The values and work ethic displayed by a</p>
          <p className='text-[#24272E] font-bold'>Read Case Study ➡️</p>
        </div>
      </div>

      <div className='w-[70%] m-auto items-center text-center mt-[180px] flex flex-col gap-[15px] mb-[120px]'>
    <Button style={{'backgroundColor' : '#F0E71433', 'color' : '#101C26', 'padding' : '6px 30px','fontSize' : '14px','fontWeight' : 'bold','borderRadius' : '25px'}} className='btn2' variant="outlined">TESTIMONIAL</Button>
    <h1 className='text-[#24272E] text-[44px] font-[600] w-[490px]'>Client’s kind Words</h1>
    <p className='text-[#555C68] text-[18px] w-[600px]'>Business owners and managers lead by example. The values </p>
    </div>

    <div className='flex w-[98%] m-auto justify-between mb-[80px]'>

    <div class="w-[30%] bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center gap-4 text-center mx-auto">
  <img src={image32} alt="User" class="w-[70px] h-[70px] rounded-full object-cover" />
  <h2 class="font-semibold text-[16px] text-[#24272E]">Brooklyn Simmons</h2>
  <p class="text-sm text-gray-500">Co-Founder and CEO, Snapdeal</p>
  <p class="text-[#FF9800] text-lg">★★★★★</p>
  <p class="text-[#555C68] text-[16px] leading-relaxed">
    <span class="text-orange-500 text-2xl font-bold mr-1">“</span>
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia cons 
    <span class="text-orange-500 text-2xl font-bold ml-1">”</span>
  </p>
</div>

<div class="w-[30%] bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center gap-4 text-center mx-auto ">
  <img src={image33} alt="User" class="w-[70px] h-[70px] rounded-full object-cover" />
  <h2 class="font-semibold text-[16px] text-[#24272E]">Brooklyn Simmons</h2>
  <p class="text-sm text-gray-500">Co-Founder and CEO, Snapdeal</p>
  <p class="text-[#FF9800] text-lg">★★★★★</p>
  <p class="text-[#555C68] text-[16px] leading-relaxed">
    <span class="text-orange-500 text-2xl font-bold mr-1">“</span>
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia cons 
    <span class="text-orange-500 text-2xl font-bold ml-1">”</span>
  </p>
</div>

<div class="w-[30%] bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center gap-4 text-center mx-auto">
  <img src={image34} alt="User" class="w-[70px] h-[70px] rounded-full object-cover" />
  <h2 class="font-semibold text-[16px] text-[#24272E]">Jacob Jones</h2>
  <p class="text-sm text-gray-500">Co-Founder and CEO, Snapdeal</p>
  <p class="text-[#FF9800] text-lg">★★★★★</p>
  <p class="text-[#555C68] text-[16px] leading-relaxed">
    <span class="text-orange-500 text-2xl font-bold mr-1">“</span>
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia cons 
    <span class="text-orange-500 text-2xl font-bold ml-1">”</span>
  </p>
</div>

</div>
<img className=' w-[7%] m-auto mb-[150px]' src={image35} alt="" />


      <div className='w-[100%] m-auto flex justify-around items-center  bg-[#FFFFFF] py-[120px]'> 
        <div className='flex flex-col items-start gap-[25px]'>
        <Button style={{'backgroundColor' : '#F0E71433', 'color' : '#101C26', 'padding' : '6px 30px','fontSize' : '14px','fontWeight' : 'bold','borderRadius' : '25px'}} className='btn2' variant="outlined">OUR CONTACTS</Button>
      <h1 className='text-[#24272E] text-[44px] font-[600] w-[580px]'>Let’s Start Working Together. Get in Touch with Us!</h1>
      <p className='text-[#555C68] text-[18px] w-[500px] leading-[35px]'>Get in touch to discuss your employee wellbeing needs today. Please give us a call, drop us an email.</p>
      <div className='flex items-center gap-[20px]'>
        <img src={image36} alt="" />
        <div>
        <p className='text-[#555C68] font-bold'>41 Pilgrm Avenue, Chevy Chase, Md 20815</p>
        </div>
      </div>
      <div className='flex items-center gap-[20px]'>
        <img src={image37} alt="" />
        <div>
        <p className='text-[#555C68] font-bold'>+01234 567 890</p>
        </div>
      </div>
      <div className='flex items-center gap-[20px]'>
        <img src={image38} alt="" />
        <div>
        <p className='text-[#555C68] font-bold'>info@agency.com</p>
        </div>
      </div>
        </div>
        <img src={image39} alt="" />
      </div>

      <div className='h-[60vh] bg-[#101C26] text-[white]'>
        <div className='flex justify-around pt-[100px] border-b-1 w-[95%] m-auto pb-[50px]'>
          <div className='w-[350px] flex flex-col items-start gap-[25px]'>
            <img src={image1} alt="" />
            <p className='text-[#F5F5F5] font-bold'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            <img src={image40} alt="" />
          </div>
          <div className='flex flex-col items-start gap-[15px]'>
            <h3 className='text-[#F5F5F5] font-bold text-[20px]'>Useful Link</h3>
            <p className='text-[#B3B3B3] text-[17px]'>Home</p>
            <p className='text-[#B3B3B3] text-[17px]'>Company News</p>
            <p className='text-[#B3B3B3] text-[17px]'>About us</p>
            <p className='text-[#B3B3B3] text-[17px]'>Projects</p>
            <p className='text-[#B3B3B3] text-[17px]'>Careers</p>
          </div>
          <div className='flex flex-col items-start gap-[25px]'>
            <h3 className='text-[#F5F5F5] font-bold text-[20px]'>Services</h3>
            <p className='text-[#B3B3B3] text-[17px]'>Website Design</p>
            <p className='text-[#B3B3B3] text-[17px]'>Logo and Branding            </p>
            <p className='text-[#B3B3B3] text-[17px]'>Mobile App </p>
            <p className='text-[#B3B3B3] text-[17px]'>Search Engine</p>
          </div>
          <div className='flex flex-col items-start gap-[25px]'>
            <h3 className='text-[#F5F5F5] font-bold text-[20px]'>Company</h3>
            <p className='text-[#B3B3B3] text-[17px]'>Carees</p>
            <p className='text-[#B3B3B3] text-[17px]'>Contact</p>
            <p className='text-[#B3B3B3] text-[17px]'>FAQ</p>
            <p className='text-[#B3B3B3] text-[17px]'>Partners</p>
          </div>
          <div className='flex flex-col items-start gap-[30px]'>
            <h3 className='text-[#F5F5F5] font-bold text-[20px]'>Contact Us</h3>
            <div className='flex items-center gap-[20px]'>
        <img className='bg-[#F0E714]' src={image36} alt="" />
        <div>
        <p className='text-[#B3B3B3] text-[17px]'>41 Pilgrm Avenue, Chevy Chase, Md 20815</p>
        </div>
      </div>
      <div className='flex items-center gap-[20px]'>
        <img className='bg-[#F0E714]'  src={image37} alt="" />
        <div>
        <p className='text-[#B3B3B3] text-[17px]'>+01234 567 890</p>
        </div>
      </div>
      <div className='flex items-center gap-[20px]'>
        <img className='bg-[#F0E714]'  src={image38} alt="" />
        <div>
        <p className='text-[#B3B3B3] text-[17px]'>info@agency.com</p>
        </div>
      </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default App