import React from 'react'

export default function ApodFooter(props) {
  const { showModal, handleToggleModal, data } = props

  return (
      <footer className="fixed bottom-0 left-0 w-full flex items-center justify-between gap-4 p-4">
          <div className="absolute inset-0 z-[-1] bg-gradient-to-t from-[#030615] to-transparent"></div>
          <div>
              <h2 className = "text-2xl">{data?.title}</h2>
          </div>
          <button onClick={handleToggleModal}>
              <i className="fa-solid fa-circle-info"></i>
          </button>
      </footer>
  )
}
