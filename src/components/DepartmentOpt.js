import React from 'react'

const DepartmentOpt = ({departmentRef}) => {
    return (
        <select name="department" id="department" ref={departmentRef}>
            <option value="null">Select Department</option>
            <option value="engineering">Engineering</option>
            <option value="marketing">Marketing</option>
            <option value="human_resources">Human Resources</option>
            <option value="finance">Finance</option>
            <option value="product_management">Product Management</option>
            <option value="research_development">Research & Development</option>
            <option value="design">Design</option>
        </select>
    )
}

export default DepartmentOpt