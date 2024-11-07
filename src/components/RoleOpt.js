import React from 'react'

const RoleOpt = ({ roleRef }) => {
    return (
        <select name="role" id="role" ref={roleRef}>
            <option value="null">Select Role</option>
            <option value="software_engineer">Software Engineer</option>
            <option value="marketing_specialist">Marketing Specialist</option>
            <option value="hr_manager">Human Resources Manager</option>
            <option value="financial_analyst">Financial Analyst</option>
            <option value="product_manager">Product Manager</option>
            <option value="ux_ui_designer">UX/UI Designer</option>
            <option value="data_analyst">Data Analyst</option>
        </select>
    )
}

export default RoleOpt