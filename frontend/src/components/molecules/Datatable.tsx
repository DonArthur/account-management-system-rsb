type Props = {
    columnsArr: string[]
    dataArr: Array<{ name: string; email: string; role?: string }>
}

const Datatable = (props: Props) => {
    return (
        <table className='min-w-full divide-y divide-gray-300'>
            <thead className='bg-gray-50'>
                <tr>
                    {props.columnsArr.map((col, index) => (
                        <th key={index} className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                            {col}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-300'>
                {props.dataArr.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        <td className='px-6 py-4 whitespace-nowrap text-gray-500'>
                            {row.name}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-gray-500'>
                            {row.email}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-gray-500'>
                            {row.role || 'N/A'}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Datatable