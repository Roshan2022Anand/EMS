import { CrossIcon } from 'lucide-react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Salary = ({ index, setsalaryNLeave }) => {

    const dispatch = useDispatch();
    const emp = useSelector(state => state.company.allEmployees[index])

    const [SalaryCol, setSalaryCol] = useState(true);

    return (
        <article className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden p-4 relative text-[var(--color-primary)]">
            <button className='absolute top-0 right-0 m-1 text-black rotate-45' onClick={() => { setsalaryNLeave(null) }}><CrossIcon /></button>
            <nav className='flex border-2 mt-5 rounded-xl'>
                <button className='grow rounded-xl' style={{
                    backgroundColor: SalaryCol ? 'var(--color-accent)' : '',
                }} onClick={() => { setSalaryCol(true) }}>Salary</button>
                <button className='grow rounded-xl' style={{
                    backgroundColor: SalaryCol ? '' : 'var(--color-accent)',
                }} onClick={() => { setSalaryCol(false) }}>Leave</button>
            </nav>

            {SalaryCol ? <section></section> : <section></section>}

        </article>
    )
}

export default Salary

// --color - primary: #1F1F1F;
// /* Used for main backgrounds */

// --color - secondary: #3A4A5C;
// /* Used for containers, cards */

// --color - accent: #1ABC9C;