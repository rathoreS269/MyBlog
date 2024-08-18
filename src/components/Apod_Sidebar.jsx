import React from 'react'

function ApodSideBar({data, handleToggleModal}){
  return(
   <div >
     <div className = "absolute inset-0 bg-[#030615] opacity-60"></div>
     <div className = "relative z-15 flex flex-col gap-4 p-4 overflow-y-scroll h-full w-4/5 max-w-[800px] ml-auto bg-[#030615]">
     <h1 className = "text-2xl">{data?.title}</h1>
     <div>
       <p className = "text-xl ">
         {data?.date}
       </p>
       <p className = " my-2 text-white">{data?.explanation}</p>
     </div>
     <button className = "bg-transparent text-white border-none outline-none mr-auto cursor-pointer transition duration-200 py-4"
      onClick = {handleToggleModal}>
     <i className="fa-solid fa-arrow-right"></i>
       </button>
    </div>
   </div>
  )
}

export default ApodSideBar