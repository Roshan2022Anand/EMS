import React, { useRef, useState } from 'react'
import RoleOpt from '@/components/RoleOpt';
import DepartmentOpt from '@/components/DepartmentOpt';
import { CheckCircle, CrossIcon } from 'lucide-react';
import { Edit } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmpRole } from '@/redux/slices/compnaySlice';
const EditEmp = ({ index, seteditSection }) => {
    const dispatch = useDispatch();
    const emp = useSelector(state => state.company.allEmployees[index])

    const [editState, seteditState] = useState(false)

    const roleRef = useRef(null);
    const departmentRef = useRef(null);

    const saveEdits = () => {
        dispatch(updateEmpRole({ index, role: roleRef.current.value, department: departmentRef.current.value }))
        seteditState(false)
    }

    return (
        <article className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden p-4 relative">
            <button className='absolute top-0 right-0 m-1 text-black rotate-45' onClick={() => { seteditSection(null) }}><CrossIcon /></button>
            <figure className="flex flex-col items-center">
                <img
                    src={emp.pic}
                    alt={`${emp.name}'s profile`}
                    className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 mb-4"
                />
                <h2 className="text-2xl font-semibold text-gray-600">{emp.name}</h2>
            </figure>
            <div className="w-fit mx-auto text-gray-800 font-medium">
                <p className='flex'>Role: {editState ?
                    <><RoleOpt roleRef={roleRef} /><CheckCircle onClick={saveEdits} /></>
                    : <>{emp.employee.role}<Edit onClick={() => { seteditState(true) }} /></>}</p>

                <p className='flex'>Department: {editState ?
                    <><DepartmentOpt departmentRef={departmentRef} /><CheckCircle onClick={saveEdits} /></>
                    : <>{emp.employee.department}<Edit onClick={() => { seteditState(true) }} /></>} </p>
            </div>
        </article>
    )
}

export default EditEmp
