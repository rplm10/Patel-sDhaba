import React, { useState } from 'react';
import moment from 'moment'; // Import moment library for date formatting
import logo from './Logo.jpg'; // Import your logo file

const HqReportAlpha = () => {
  const [showSales, setShowSales] = useState(true); // State to manage which table to display
  const [filters, setFilters] = useState({
    productName: '',
    startDate: '',
    endDate: ''
  });
  const [filteredSalesData, setFilteredSalesData] = useState([]);
  const [filteredStockData, setFilteredStockData] = useState([]);

  const salesData = [
    { productName: 'Fanta', productCode: 'A102', date: '2024-03-15', price: 50, quantity: 23 },
    { productName: 'Pepsi', productCode: 'A145', date: '2024-03-16', price: 40, quantity: 13 }
    // Add more sales data as needed
  ];

  const stockData = [
    { productName: 'Fanta', productCode: 'A102', date: '2024-03-15', StockIn: 23, StockOut: 12 },
    { productName: 'Pepsi', productCode: 'A145', date: '2024-03-16', StockIn: 27, StockOut: 14 }
    // Add more stock data as needed
  ];

  // Function to format date
  const formatDate = (date) => {
    return moment(date).format('MM-DD-YYYY'); // Customize date format as needed
  };

  const toggleTable = (reportType) => {
    setShowSales(reportType === 'Sales'); // Toggle between sales and stock tables
    setFilters({ // Reset filters when toggling tables
      productName: '',
      startDate: '',
      endDate: ''
    });
    setFilteredSalesData([]);
    setFilteredStockData([]);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    if (showSales) {
      const filteredSales = salesData.filter((item) => {
        return (
          (filters.productName === '' || item.productName.toLowerCase() === filters.productName.toLowerCase()) &&
          (!filters.startDate || moment(item.date).isSameOrAfter(filters.startDate)) &&
          (!filters.endDate || moment(item.date).isSameOrBefore(filters.endDate))
        );
      });
      setFilteredSalesData(filteredSales);
    } else {
      const filteredStock = stockData.filter((item) => {
        return (
          (filters.productName === '' || item.productName.toLowerCase() === filters.productName.toLowerCase()) &&
          (!filters.startDate || moment(item.date).isSameOrAfter(filters.startDate)) &&
          (!filters.endDate || moment(item.date).isSameOrBefore(filters.endDate))
        );
      });
      setFilteredStockData(filteredStock);
    }
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.mainContent}>
          <img src={logo} alt="Logo" style={styles.logo} />
          <h1>Alpha Report</h1>
          <div style={styles.topRow}>
            <button style={styles.Button} onClick ={() => toggleTable('Sales')}>
              Sales Report
            </button>
            <button style={styles.Button} onClick={() => toggleTable('Stock')}>
              Stock Report
            </button>
      {showSales || !showSales ? (
       <div style={styles.filters}>
          <select name="productName" value={filters.productName} onChange={handleFilterChange}>
              <option value="">Select Product</option>
              <option value="Fanta">Fanta</option>
              <option value="Pepsi">Pepsi</option>
          </select>
          <label>Date Start:</label>
            <input type="date" name="startDate" value={filters.startDate} onChange={handleFilterChange} />
              <label>Date End:</label>
           <input type="date" name="endDate" value={filters.endDate} onChange={handleFilterChange} />
          <button style={styles.applyButton} onClick={applyFilters}>Apply Filters</button>
        </div>
       ) : null}
          </div>
          <div style={styles.bottomRow}>
            {showSales ? (
              <div className='sales-table'>
                <table style={{ width: '100%' }}>
                  <thead>
                    <h1>SalesReport</h1>
                    <tr>
                      <th style={styles.tableCell}>Product Name</th>
                      <th style={styles.tableCell}>Product Code</th>
                      <th style={styles.tableCell}>Date</th>
                      <th style={styles.tableCell}>Price</th>
                      <th style={styles.tableCell}>Quantity</th>
                      <th style={styles.tableCell}>Total Sales</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(filteredSalesData.length ? filteredSalesData : salesData).map((salesItem, index) => (
                      <tr key={index}>
                        <td style={styles.tableCell}>{salesItem.productName}</td>
                        <td style={styles.tableCell}>{salesItem.productCode}</td>
                        <td style={styles.tableCell}>{formatDate(salesItem.date)}</td>
                        <td style={styles.tableCell}>{salesItem.price}</td>
                        <td style={styles.tableCell}>{salesItem.quantity}</td>
                        <td style={styles.tableCell}>{salesItem.price * salesItem.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className='stock-table'>
                <table style={{ width: '100%' }}>
                  <thead>
                    <h1>StockReport</h1>
                    <tr>
                      <th style={styles.tableCell}>Product Name</th>
                      <th style={styles.tableCell}>Product Code</th>
                      <th style={styles.tableCell}>Date</th>
                      <th style={styles.tableCell}>Price</th>
                      <th style={styles.tableCell}>Stock In</th>
                      <th style={styles.tableCell}>Stock Out</th>
                      <th style={styles.tableCell}>Total Stock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(filteredStockData.length ? filteredStockData : stockData).map((stockItem, index) => (
                      <tr key={index}>
                        <td style={styles.tableCell}>{stockItem.productName}</td>
                        <td style={styles.tableCell}>{stockItem.productCode}</td>
                        <td style={styles.tableCell}>{formatDate(stockItem.date)}</td>
                        <td style={styles.tableCell}>{stockItem.price}</td>
                        <td style={styles.tableCell}>{stockItem.StockIn}</td>
                        <td style={styles.tableCell}>{stockItem.StockOut}</td>
                        <td style={styles.tableCell}>{stockItem.StockIn - stockItem.StockOut}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white', // Change background color to black
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column', // Set flex direction to column
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: '150px',
    marginBottom: '20px',
  },
  topRow: {
    marginBottom: '20px', // Add margin bottom between buttons and table
  },
  bottomRow: {
    width: '100%',
  },
  Button: {
    marginBottom: '20px', 
    padding: '10px 30px', 
    width: '200px',
    textAlign: 'center',
    color: 'white', 
    border: '1px solid black', 
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px', 
    backgroundColor: 'black', 
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    marginRight: '10px', // Add margin right between buttons
  },
  tableCell: {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'center',
    color: 'black', // Change font color to white
  },
  filters: {
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  applyButton: {
    padding: '8px 20px',
    marginLeft: '10px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default HqReportAlpha;




































