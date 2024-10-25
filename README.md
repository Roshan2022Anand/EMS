--*--EMS--*--
A simple Employee management System built in next.js , were manager can manager the employees in their company by managing the salary , leaves and assignments in a simple way.

--*--WHY NEXT.JS--*--
next.js is simple to use Full stack frameWork


How data is Stored

user.js ->
        POST /api/user: To handle user signups.
        PUT /api/user/details: To update user details.
        GET /api/user: To retrieve user data.
        DELETE /api/user: To delete a user.

Employee ->
        PUT /api/employee/leave: To add/update an employee's leave data.
        PUT /api/employee/salary: To add/update an employee's salary data.
        GET /api/employee/status: To get the status or data of a employee.

Company ->
        POST /api/company: To create a company.
        PUT /api/company/add-employee: To add an employee to a company.
        GET /api/company/details: To retrieve company information.
        PUT /api/company/manager: To update manager-related data