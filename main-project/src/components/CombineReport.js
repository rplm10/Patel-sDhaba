import React, { useState } from 'react';
//import moment from 'moment'; // Import moment library for date formatting
import logo from './Logo.jpg'; // Import your logo file

function CombineReport() {
  // State for selected product name and date range
  const [productName, setProductName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Dummy data for the tables (replace this with your actual data)
  const tableData = [
    { productName: 'Fanta', productCode: 'F001', branch: 'Branch A', remainingStock: 100, stockSold: 50, totalSales: 500 },
    { productName: 'Pepsi', productCode: 'P001', branch: 'Branch B', remainingStock: 150, stockSold: 80, totalSales: 800 },
    // Add more data as needed
  ];

  // Function to handle changes in product name dropdown
  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  // Function to handle changes in start date input
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  // Function to handle changes in end date input
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform actions with the selected filters here
  };

  return (
    <>
      <div style={styles.container}>
      <img src={logo} alt="Logo" style={styles.logo} />
        <div style={styles.mainContent}>
          <form onSubmit={handleSubmit}>
            <label>
              Product Name:
              <select value={productName} onChange={handleProductNameChange} style={styles.select}>
                <option value="">Select Product</option>
                <option value="Fanta">Fanta</option>
                <option value="Pepsi">Pepsi</option>
              </select>
            </label>
            <br />
            <label>
              Start Date:
              <input
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
                style={styles.input}
              />
            </label>
            <br />
            <label>
              End Date:
              <input
                type="date"
                value={endDate}
                onChange={handleEndDateChange}
                style={styles.input}
              />
            </label>
            <br />
            <button type="submit" style={styles.button}>Apply Filters</button>
          </form>
          <table style={{ ...styles.table, marginTop: '20px' }}>
            <caption style={styles.tableCaption}>Combine Report</caption>
            <thead>
              <tr>
                <th style={styles.tableHeader}>Product Name</th>
                <th style={styles.tableHeader}>Product Code</th>
                <th style={styles.tableHeader}>Branch</th>
                <th style={styles.tableHeader}>Total Remaining Stock</th>
                <th style={styles.tableHeader}>Total Stock Sold</th>
                <th style={styles.tableHeader}>Total Sales</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td style={styles.tableCell}>{item.productName}</td>
                  <td style={styles.tableCell}>{item.productCode}</td>
                  <td style={styles.tableCell}>{item.branch}</td>
                  <td style={styles.tableCell}>{item.remainingStock}</td>
                  <td style={styles.tableCell}>{item.stockSold}</td>
                  <td style={styles.tableCell}>{item.totalSales}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table style={{ ...styles.table, marginTop: '20px' }}>
            <caption style={styles.tableCaption}>Combine All the Branches Report</caption>
            <thead>
              <tr>
                <th style={styles.tableHeader}>Total Remaining Stock</th>
                <th style={styles.tableHeader}>Total Sold Stock</th>
                <th style={styles.tableHeader}>Total Sales</th>
              </tr>
            </thead>
            <tbody>
              {/* Dummy data, replace with actual calculations */}
              <tr>
                <td style={styles.tableCell}>250</td>
                <td style={styles.tableCell}>130</td>
                <td style={styles.tableCell}>1300</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Align items at the center horizontally
    width: '100%',
    marginTop: '80px', // Adjust margin top to account for fixed header
  },
  input: {
    marginBottom: '10px',
    padding: '8px',
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: 'white',
  },
  logo: {
    width: '150px',
    marginBottom: '20px',
  },
  select: {
    marginBottom: '10px',
    padding: '8px',
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: 'white',
  },
  button: {
    marginBottom: '20px', // Add margin bottom between buttons
    padding: '10px 30px', // Adjust padding to make buttons bigger
    width: '100%',
    textAlign: 'center',
    color: 'white', 
    border: '1px solid white', // Change border color to white
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px', // Adjust font size to make buttons bigger
    backgroundColor: 'black', 
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
  },
  table: {
    borderCollapse: 'collapse',
    width: '100%',
  },
  tableCaption: {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: 'black',
  },
  tableHeader: {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px',
    background: '#f2f2f2',
    color: 'black', 
  },
  tableCell: {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px',
    color: 'black', 
  },
};

export default CombineReport;





