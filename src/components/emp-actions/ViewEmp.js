import { CrossIcon } from 'lucide-react'
import React from 'react'

const ViewEmp = ({emp,setbasicDetails}) => {
  return (
      <article className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden p-4 relative">
          <button className='absolute top-0 right-0 m-1 text-black rotate-45' onClick={() => { setbasicDetails(null) }}><CrossIcon /></button>
          <figure className="flex flex-col items-center">
              <img
                  src={emp.pic}
                  alt={`${emp.name}'s profile`}
                  className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 mb-4"
              />
              <figcaption className="text-center">
                  <h2 className="text-2xl font-semibold text-gray-600">{emp.name}</h2>
                  <p className="text-gray-600">Age: {emp.age}</p>
                  <p className="text-gray-600">DOB: {emp.dob}</p>
              </figcaption>
          </figure>

          <div className="mt-4 text-center text-gray-800 font-medium">
              <p>Phone: {emp.phone}</p>
              <p>Role: {emp.employee.role}</p>
              <p>Department: {emp.employee.department}</p>
          </div>
      </article>
  )
}

export default ViewEmp

