import React from 'react'

export const IndividualData = ({individualExcelData}) => {
    return (
        <>
            <th>{individualExcelData.Id}</th>
            <th>{individualExcelData.Area}</th>
            <th>{individualExcelData.ProductName}</th>
            <th>{individualExcelData.Quantity}</th>
            <th>{individualExcelData.Brand}</th>
        </>
    )
}
