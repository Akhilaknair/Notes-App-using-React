import React, { useState } from 'react'

const App = () => {


   const [title,setTitle]=useState('')
   const [detail,setDetail]=useState('')
   const [tasks,setTasks]=useState([])

   const submitHandler=(e)=>{
       e.preventDefault();

       //IMP
       const copyTask=[...tasks]
       copyTask.push({title,detail})
       setTasks(copyTask)
      
       setTitle('')
       setDetail('')
   }
   
//splice
   const deleteNote=(idx)=>{
       console.log('note deleted');
       const copyTask=[...tasks];
       console.log(idx);
       copyTask.splice(idx,1);
       setTasks(copyTask)
   }



  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>submitHandler(e)} className="p-10 gap-4 flex flex-col lg:w-1/2">
         <h1 className='text-4xl font-bold'>Add notes</h1>
       
          <input type="text" placeholder='enter title of your note'
            value={title} 
            onChange={(e)=>setTitle(e.target.value)}
            className='px-4 py-2 border-2 font-medium outline-none w-full border-blue-100 rounded'></input>
          
          <textarea placeholder='enter details' 
          value={detail}
          onChange={(e)=>setDetail(e.target.value)}
          className='px-4 py-2 h-30 font-medium outline-none border-2 w-full border-blue-100 rounded'></textarea>
      
          <button className='px-4 active:scale-95 active:bg-gray-800 py-2 text-black bg-white w-full'>Add notes </button>
         
          {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/049/620/928/small/a-girl-is-writing-in-a-notebook-and-holding-a-pencil-png.png" className='h-80 rotate-y-180 '/>   */}
      </form>

      <div className='p-10 h-full lg:w-1/2 gap-5 overflow-auto lg:border-l-1'>
      <h1 className='text-4xl font-bold'>Your notes</h1>
      <div className="flex flex-wrap gap-5 mt-5 ">
       
            {
                tasks.map(function(elem,idx){
                     return    <div key={idx} className="mt-2 min-h-62 bg-cover p-10 w-60 rounded-2xl bg-[url('https://static.vecteezy.com/system/resources/thumbnails/027/205/608/small/cute-sticky-paper-note-pastel-doodle-creative-office-supplies-illustration-png.png')]">


                              <div onClick={()=>{deleteNote(idx)}} className='mt-1 p-1 ml-46 bg-red-400 text-gray-900 w-7 h-7 text-center rounded-full font-bold text-xs'>X</div>

                              <h1 className='break-words text-wrap text-black text-2xl font-bold'>{elem.title}</h1>
                              <p className='break-words leading-tight mt-3 text-gray-700 font-medium'>{elem.detail}</p>
                     </div>
                })
            }
        
      
      </div>
         
      </div>

    </div>
  )
}

export default App
