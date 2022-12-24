import { Table } from 'antd';
import React from 'react'

const TableData = () => {

    const columns = [
        {
          title: 'SNon',
          dataIndex: 'key',
        },
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: 'Product',
          dataIndex: 'age',
        },
        {
          title: 'States',
          dataIndex: 'address',
        },
      ];
      const data = [];
      for (let i = 0; i < 46; i++) {
        data.push({
          key: i,
          name: `Edward King ${i}`,
          age: 32,
          address: `London, Park Lane no. ${i}`,
        });
      }

  return (
    <div>
        <Table columns={columns} dataSource={data} /> 
    </div>
  )
}

export default TableData