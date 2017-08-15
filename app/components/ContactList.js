import React from 'react'
// COMPONENTS
import { Link } from 'react-router-dom'
import ReactTable from 'react-table'
// JS (Webpack)
import 'react-table/react-table.css'

const ContactList = ({data, handleContactDelete, handleSavingID}) => {
    const columns = [
        {
            Header: 'First Name',
            accessor: 'firstName'
        },
        {
            Header: 'Last Name',
            accessor: 'lastName'
        },
        {
            Header: 'DOB',
            accessor: 'dob'
        },
        {
            Header: 'Phone Number',
            accessor: 'phone'
        },
        {
            Header: 'E-Mail',
            accessor: 'email'
        },
        {
            Header: 'ID',
            accessor: 'id'
        },
        /* eslint react/no-multi-comp: 0*/
        {
            Header: 'Actions',
            accessor: 'actions',
            Cell: (rowInfo) =>
                <div style={{fontSize: 10}}>
                    {/* EDIT Link here */}
                    <Link
                        onClick={ () => handleContactDelete(rowInfo.row.id) }
                        to="#">
                        DELETE
                    </Link>
                </div>
        },
    ]
    return (
        <div>
            <ReactTable
                data={data}
                columns={columns}
                defaultPageSize={5}
                />
        </div>
    )
}

ContactList.propTypes = {
    data: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.object,
    ]),
    handleContactDelete: React.PropTypes.func,
    handleSavingID: React.PropTypes.func,
}

export default ContactList
