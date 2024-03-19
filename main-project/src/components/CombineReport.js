import React, { useState, useMemo } from 'react';
import logo from './Logo.jpg';

function CombineReport() {
  const [productName, setProductName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const tableData = useMemo(() => [
    { productName: 'Fanta', productCode: 'F001', date: '03/24/2024', remainingStockH1: 100, stockSoldH1: 50, totalSalesH1: 500, remainingStockH2: 80, stockSoldH2: 30, totalSalesH2: 300, remainingStockHQ: 200, stockSoldHQ: 100, totalSalesHQ: 1000, remainingStockALL: 380, stockSoldALL: 180, totalSalesALL: 1800 },
    { productName: 'Pepsi', productCode: 'P001', date: '05/24/2024', remainingStockH1: 150, stockSoldH1: 80, totalSalesH1: 800, remainingStockH2: 100, stockSoldH2: 40, totalSalesH2: 400, remainingStockHQ: 250, stockSoldHQ: 120, totalSalesHQ: 1200, remainingStockALL: 500, stockSoldALL: 240, totalSalesALL: 2400 },
    { productName: 'Coke', productCode: 'C001', date: '06/15/2024', remainingStockH1: 120, stockSoldH1: 60, totalSalesH1: 600, remainingStockH2: 90, stockSoldH2: 50, totalSalesH2: 500, remainingStockHQ: 220, stockSoldHQ: 110, totalSalesHQ: 1100, remainingStockALL: 430, stockSoldALL: 220, totalSalesALL: 2200 },
    { productName: 'Sprite', productCode: 'S001', date: '07/10/2024', remainingStockH1: 130, stockSoldH1: 70, totalSalesH1: 700, remainingStockH2: 110, stockSoldH2: 60, totalSalesH2: 600, remainingStockHQ: 280, stockSoldHQ: 140, totalSalesHQ: 1400, remainingStockALL: 520, stockSoldALL: 270, totalSalesALL: 2700 },
    { productName: 'Monster', productCode: 'M001', date: '08/20/2024', remainingStockH1: 200, stockSoldH1: 100, totalSalesH1: 1000, remainingStockH2: 150, stockSoldH2: 70, totalSalesH2: 700, remainingStockHQ: 300, stockSoldHQ: 150, totalSalesHQ: 1500, remainingStockALL: 650, stockSoldALL: 320, totalSalesALL: 3200 },
    { productName: 'Redbull', productCode: 'R001', date: '09/05/2024', remainingStockH1: 180, stockSoldH1: 90, totalSalesH1: 900, remainingStockH2: 140, stockSoldH2: 80, totalSalesH2: 800, remainingStockHQ: 260, stockSoldHQ: 130, totalSalesHQ: 1300, remainingStockALL: 540, stockSoldALL: 270, totalSalesALL: 2700 }
  ], []);

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Filter data based on selected product name and date range
    const filtered = tableData.filter(item => {
      if (productName && productName !== item.productName) return false;
      if (startDate && endDate) {
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);
        const itemDateObj = new Date(item.date);
        return itemDateObj >= startDateObj && itemDateObj <= endDateObj;
      }
      if (startDate && new Date(item.date) < new Date(startDate)) return false;
      if (endDate && new Date(item.date) > new Date(endDate)) return false;
      return true;
    });
    setFilteredData(filtered);
  };


  // Calculate totals
  const totals = useMemo(() => {
    return filteredData.reduce((acc, item) => {
      // Add item values to totals
      return {
        remainingStockH1: acc.remainingStockH1 + item.remainingStockH1,
        stockSoldH1: acc.stockSoldH1 + item.stockSoldH1,
        totalSalesH1: acc.totalSalesH1 + item.totalSalesH1,
        remainingStockH2: acc.remainingStockH2 + item.remainingStockH2,
        stockSoldH2: acc.stockSoldH2 + item.stockSoldH2,
        totalSalesH2: acc.totalSalesH2 + item.totalSalesH2,
        remainingStockHQ: acc.remainingStockHQ + item.remainingStockHQ,
        stockSoldHQ: acc.stockSoldHQ + item.stockSoldHQ,
        totalSalesHQ: acc.totalSalesHQ + item.totalSalesHQ,
        remainingStockALL: acc.remainingStockALL + item.remainingStockALL,
        stockSoldALL: acc.stockSoldALL + item.stockSoldALL,
        totalSalesALL: acc.totalSalesALL + item.totalSalesALL,
      };
    }, {
      remainingStockH1: 0,
      stockSoldH1: 0,
      totalSalesH1: 0,
      remainingStockH2: 0,
      stockSoldH2: 0,
      totalSalesH2: 0,
      remainingStockHQ: 0,
      stockSoldHQ: 0,
      totalSalesHQ: 0,
      remainingStockALL: 0,
      stockSoldALL: 0,
      totalSalesALL: 0,
    });
  }, [filteredData]);

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
                <option value="Coke">Coke</option>
                <option value="Sprite">Sprite</option>
                <option value="Monster">Monster</option>
                <option value="Redbull">Redbull</option>
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
          <div style={{...styles.tableWindow, height: '400px'}}>
            <table style={styles.table}>
              <caption style={styles.tableCaption}>Combine Report</caption>
              <thead>
                <tr>
                  <th style={styles.tableHeader}>Product Name</th>
                  <th style={styles.tableHeader}>Product Code</th>
                  <th style={styles.tableHeader}>Date</th>
                  <th style={styles.tableHeader}>Total Remaining Stock in H1</th>
                  <th style={styles.tableHeader}>Total Sold Stock in H1</th>
                  <th style={styles.tableHeader}>Total Sales in H1</th>
                  <th style={styles.tableHeader}>Total Remaining Stock in H2</th>
                  <th style={styles.tableHeader}>Total Sold Stock in H2</th>
                  <th style={styles.tableHeader}>Total Sales in H2</th>
                  <th style={styles.tableHeader}>Total Remaining Stock in HQ</th>
                  <th style={styles.tableHeader}>Total Sold Stock in HQ</th>
                  <th style={styles.tableHeader}>Total Sales in HQ</th>
                  <th style={styles.tableHeader}>Total Remaining Stock in all the branches plus HQ</th>
                  <th style={styles.tableHeader}>Total Sold Stock in all the branches plus HQ</th>
                  <th style={styles.tableHeader}>Total Sales in all the branches plus HQ</th>
                </tr>
              </thead>
              <tbody>
                {(filteredData.length > 0 ? filteredData : tableData).map((item, index) => (
                  <tr key={index}>
                    <td style={styles.tableCell}>{item.productName}</td>
                    <td style={styles.tableCell}>{item.productCode}</td>
                    <td style={styles.tableCell}>{item.date}</td>
                    <td style={styles.tableCell}>{item.remainingStockH1}</td>
                    <td style={styles.tableCell}>{item.stockSoldH1}</td>
                    <td style={styles.tableCell}>{item.totalSalesH1}</td>
                    <td style={styles.tableCell}>{item.remainingStockH2}</td>
                    <td style={styles.tableCell}>{item.stockSoldH2}</td>
                    <td style={styles.tableCell}>{item.totalSalesH2}</td>
                    <td style={styles.tableCell}>{item.remainingStockHQ}</td>
                    <td style={styles.tableCell}>{item.stockSoldHQ}</td>
                    <td style={styles.tableCell}>{item.totalSalesHQ}</td>
                    <td style={styles.tableCell}>{item.remainingStockALL}</td>
                    <td style={styles.tableCell}>{item.stockSoldALL}</td>
                    <td style={styles.tableCell}>{item.totalSalesALL}</td>
                  </tr>
                ))}
                <tr>
                  <td>Total</td>
                  <td></td>
                  <td></td>
                  <td>{totals.remainingStockH1}</td>
                  <td>{totals.stockSoldH1}</td>
                  <td>{totals.totalSalesH1}</td>
                  <td>{totals.remainingStockH2}</td>
                  <td>{totals.stockSoldH2}</td>
                  <td>{totals.totalSalesH2}</td>
                  <td>{totals.remainingStockHQ}</td>
                  <td>{totals.stockSoldHQ}</td>
                  <td>{totals.totalSalesHQ}</td>
                  <td>{totals.remainingStockALL}</td>
                  <td>{totals.stockSoldALL}</td>
                  <td>{totals.totalSalesALL}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    height: 'auto',
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
    alignItems: 'center',
    width: '100%',
    marginTop: '80px',
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
    marginBottom: '20px',
    padding: '10px 30px',
    width: '100%',
    textAlign: 'center',
    color: 'white',
    border: '1px solid white',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px',
    backgroundColor: 'black',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
  },
  tableWindow: {
    width: '100%',
    overflowY: 'auto',
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
    padding: '12px 8px', // Increased padding for column headings
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

















