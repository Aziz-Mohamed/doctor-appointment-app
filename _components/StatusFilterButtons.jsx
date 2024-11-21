'use client'

import { useState } from 'react'
import { Button } from "@/_components/ui/Button"
import { useQueryParams } from "@/_hooks/useQueryParams";
import { revalidatePath } from 'next/cache';

const statuses = [
  { 
    status: '', 
    label: 'All', 
    className: 'bg-gray-100 text-gray-700 hover:bg-gray-200', 
    activeClassName: 'bg-gray-500 text-white'
  },
  { 
    status: 'confirmed', 
    label: 'Confirmed', 
    className: 'bg-green-100 text-green-700 hover:bg-green-200', 
    activeClassName: 'bg-green-500 text-white'
  },
  { 
    status: 'pending', 
    label: 'Pending', 
    className: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200', 
    activeClassName: 'bg-yellow-500 text-white'
  },
  { 
    status: 'completed', 
    label: 'Completed', 
    className: 'bg-blue-100 text-blue-700 hover:bg-blue-200', 
    activeClassName: 'bg-blue-500 text-white'
  },
  { 
    status: 'canceled', 
    label: 'Canceled', 
    className: 'bg-red-100 text-red-700 hover:bg-red-200', 
    activeClassName: 'bg-red-500 text-white'
  },
]


export default function StatusFilter() {
  const [activeStatus, setActiveStatus] = useState(null)
  const { setQueryParam } = useQueryParams();


  const handleClick = (status) => {
    const newStatus = activeStatus === status ? null : status
    // console.log('newStatus', newStatus)
    setActiveStatus(newStatus)

    if (newStatus) {
      setQueryParam('status', newStatus)
    } else {
      setQueryParam('status', null)
    }
  }

  return (
    <div className="flex flex-wrap gap-2 p-4 bg-gray-100 rounded-lg shadow-inner">
      {statuses.map(({ status, label, className, activeClassName }) => (
        <Button
          key={status}
          onClick={() => handleClick(status)}
          className={`
            ${activeStatus === status ? activeClassName : className}
            transition-all duration-200 ease-in-out transform hover:scale-105
            font-semibold
            ${activeStatus === status ? 'shadow-lg' : 'shadow'}
          `}
          variant="ghost"
        >
          {label}
        </Button>
      ))}
    </div>
  )
}