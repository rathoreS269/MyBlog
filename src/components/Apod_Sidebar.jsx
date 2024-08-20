import React from 'react'

function ApodSideBar({data, handleToggleModal}){
  return(
    <div className="fixed top-[var(--header-height)] bottom-[var(--footer-height)] right-0 w-4/5 max-w-[800px] bg-[#030615] text-white z-20 flex flex-col gap-4 p-4 overflow-y-scroll">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">{data?.title}</h1>
        <button onClick={handleToggleModal} className="bg-transparent text-white">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div>
        <p className="text-xl">{data?.date}</p>
        <p className="my-2">{data?.explanation}</p>
      </div>
    </div>
  )
}

export default ApodSideBar

// <div className="fixed inset-y-0 right-0 w-4/5 max-w-[800px] bg-[#030615] text-white z-20 flex flex-col gap-4 p-4 overflow-y-scroll">
//<div className="flex justify-between items-center">
/*
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
    */