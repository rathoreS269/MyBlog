import React from 'react'

function Logo({width = '10px' ,height = '5px'}) {
  return (
    <div className="flex justify-center items-center w-19 h-12  rounded-full overflow-hidden">
      <img src="https://media.istockphoto.com/id/1423279537/vector/ufo-flying-saucer-with-light-beam-icon-sticker-on-gray-background.jpg?s=612x612&w=0&k=20&c=h5weL-WbMjwqnj3E5twLaABl-a_ri1Q7ylFbnoeeJAM="
         className="h-full w-full object-contain "
      />
    </div>
  )
}

export default Logo