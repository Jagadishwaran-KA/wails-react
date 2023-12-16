import React from 'react'
const table = () => {
        const data = [
          { id: 1, name: "John Doe",status:"blue",size:"1012",period:'monthly',uploaded_date:'apr 6 23',updated_date:'may 15 23' },
          { id: 2, name: "John Doe",status:"blue",size:"1012",period:'monthly',uploaded_date:'apr 6 23',updated_date:'may 15 23' },
          { id: 3,name: "John Doe",status:"blue",size:"1012",period:'monthly',uploaded_date:'apr 6 23',updated_date:'may 15 23' },
          { id:4,name: "John Doe",status:"blue",size:"1012",period:'monthly',uploaded_date:'apr 6 23',updated_date:'may 15 23' },
          {id: 5,name: "John Doe",status:"blue",size:"1012",period:'monthly',uploaded_date:'apr 6 23',updated_date:'may 15 23' },
          {id:6,name: "John Doe",status:"blue",size:"1012",period:'monthly',uploaded_date:'apr 6 23',updated_date:'may 15 23' },
        ];
  return (
<div classNameName="relative overflow-x-auto">
    <div className=' bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md'>
    <table className="w-full max-w-screen-xl mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className='px-6 py-4 '>
                <th scope="col" className="px-6 py-3">
                    FILE NAME
                </th>
                <th scope="col" className="px-6 py-3">
                    STATUS
                </th>
                <th scope="col" className="px-6 py-3">
                    FILE SIZE
                </th>
                <th scope="col" className="px-6 py-3">
                    PERIOD
                </th>
                <th scope="col" className="px-6 py-3">
                    UPLOADED DATE
                </th>
                <th scope="col" className="px-6 py-3">
                    UPDATED DATE
                </th>
            </tr>
        </thead>
        <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td>
            <div>{data.map((user) => (
        <div className='px-6 py-4 bg-white border-b dark:bg-gray-800 dark:border-gray-700 '>{user.name}</div>))}
           </div>
           </td>
           <td>
            <div>{data.map((user) => (
        <div className='px-6 py-4 bg-white border-b dark:bg-gray-800 dark:border-gray-700 '>{user.status}</div>))}
           </div>
           </td>
           
           <td>
            <div>{data.map((user) => (
        <div className='px-6 py-4 bg-white border-b dark:bg-gray-800 dark:border-gray-700 '>{user.size}</div>))}
           </div>
           </td>
           <td>
            <div>{data.map((user) => (
        <div className='px-6 py-4 bg-white border-b dark:bg-gray-800 dark:border-gray-700'>{user.period}</div>))}
           </div>
           </td>
           
           <td>
            <div>{data.map((user) => (
        <div className='px-6 py-4 bg-white border-b dark:bg-gray-800 dark:border-gray-700 '>{user.uploaded_date}</div>))}
           </div>
           </td>
           <td>
            <div>{data.map((user) => (
        <div className='px-6 py-4 bg-white border-b dark:bg-gray-800 dark:border-gray-700 '>{user.updated_date}</div>))}
           </div>
           </td>
           </tr>
            
        </tbody>
    </table>
    </div>
</div>
  );
}

export default table