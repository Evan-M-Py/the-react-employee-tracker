import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import DropDown from './DropDown'

function MainTable(props) {
    
    const [ departmentFilter, setDepartmentFilter ] = useState('All')
    const [ departmentArray, setDepartmentArray ] = useState(['CEO', 'Resource Management', 'Reception', 'Office Ex', 'Accounting'])

    const [ employees, setEmployees ] = useState([
        {
            id: '1',
            name: 'John Smith',
            department: 'Accounting',
            startDate: '09/22/1995'
        },
        {
            id: '2',
            name: 'Jane Smith',
            department: 'Accounting',
            startDate: '09/20/1995'
        },
        {
            id: '3',
            name: 'Jordan Smith',
            department: 'H.R.',
            startDate: '08/22/1995'
        },
        {
            id: '4',
            name: 'Alex Smith',
            department: 'Office Ex',
            startDate: '09/22/1995'
        },
        {
            id: '5',
            name: 'John Doe',
            department: 'Office Ex',
            startDate: '09/22/1995'
        },
        {
            id: '6',
            name: 'Jane Doe',
            department: 'Reception',
            startDate: '09/18/1995'
        },
        {
            id: '7',
            name: 'Hank Smith',
            department: 'Resource Management',
            startDate: '09/22/2001'
        },
        {
            id: '8',
            name: 'George Smith',
            department: 'Resource Management',
            startDate: '07/22/1995'
        },
        {
            id: '9',
            name: 'John Adams',
            department: 'CEO',
            startDate: '09/22/1980'
        },
        {
            id: '10',
            name: 'Jane Adams',
            department: 'CEO',
            startDate: '09/22/1980'
        },
    ]);

    const columns = [
        {
            dataField: 'id',
            text: 'Employee ID',
            sort: true
        }, 

        {
            dataField: 'name',
            text: 'Full Name',
            sort: true
        }, 

        {
            dataField: 'department',
            text: 'department',
            filter: textFilter(),
            sort: true
        },

        {
            dataField: 'startDate',
             text: 'Start Date',
             sort: true
        }
    ];

    


    const style = {
        dropDownStyle: {
            width: '200px',
            float: 'right'
        },
        table: {
            background: '#F0F0F0'
        }
    }

//-------------------------------------------------I tried a zero package way and couldnt get it to work, I pplann on going back and trying this again

    // const handleDropDownChange = (x) => {
    //     setDepartmentFilter(x)
    // }

    // const filterFunction = (filter) => {
    //     let result = ''
    //     for (let i = 0; i < employees.length; i++) {
    //         if(filter === employees[i].department){
    //             const result = employees[i]

            
            
    //         setEmployees(result);
    //     return(result);
    //         }
        
    //     }
    //     return result
    // }

    // const filterSwitch = (departmentFilter) => {
    //     switch(departmentFilter) {
    //         case 'All':
    //         console.log('stayed on all')
    //         break;
    //         case 'CEO':
    //         filterFunction(['CEO']);
    //         break;
    //         case 'Resource Management':
    //         filterFunction(['Resource Management'])
    //         break;
    //         case 'Reception':
    //         filterFunction(['Reception'])
    //         break;
    //         case 'Office Ex':
    //         filterFunction(['Office Ex'])
    //         break;
    //         case 'Accounting':
    //         filterFunction(['Accounting'])
    //         break;
    //         default:
    //     }
    // };

    // useEffect(() => {
    //     filterSwitch(departmentFilter)
    // }, [departmentFilter])

  

    return (
            <div style={style.table}>
                {/* <DropDown options={departmentArray}/> */}
                <BootstrapTable  keyField='id' data={employees} columns={columns} filter={filterFactory()} />
            </div>
    );
    };


export default MainTable;









