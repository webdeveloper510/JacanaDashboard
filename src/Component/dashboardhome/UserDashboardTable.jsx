import React from 'react';

const TableComponent = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Order ID</th>
          <th>Term</th>
          <th>Renewal Date</th>
          <th>ID</th>
          <th>Payment Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.product_name}</td>
            <td>{item.order_id}</td>
            <td>{item.term}</td>
            <td>{item.renewal_date}</td>
            <td>{item.id}</td>
            <td>{item.payment_status}</td>
            <td>{item.button}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;