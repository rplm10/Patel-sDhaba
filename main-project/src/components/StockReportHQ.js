import React, { useState } from 'react';
import './stockreport.css';
import logo from './Logo.jpg'; // Import your logo file

const StockReport = () => {
  const [stockData, setStockData] = useState([]);  
  const [productName, setProductName] = useState('');
  const [productCode, setProductCode] = useState('');

  const handleSearch = () => {
    // Here you would implement logic to fetch stock data based on the product name
    // For simplicity, let's assume stockData is fetched from an API or database
    // add the function of fetching the data from the db
    const filteredData = stockData.filter(item => item.productCode === productCode);
    setStockData(filteredData);
    

  };

  const handleProductChange = (e) => {
    const selectedProduct = e.target.value;
    setProductName(selectedProduct);
    // Logic to generate product code based on selected product
    switch (selectedProduct) {
      case 'Coca cola':
        setProductCode('CC001');
        break;
      case 'Fanta':
        setProductCode('FT001');
        break;
      case 'Sprite':
        setProductCode('SP001');
        break;
      case 'Pepsi':
        setProductCode('PS001');
        break;
      case 'Mountain Dew':
        setProductCode('MD001');
        break;
      default:
        setProductCode('');
    }
};

  return (
    <div className="stock-report-container">
      <img src={logo} className='logo' alt="Logo"/>
      <h3>Stock Report HQ</h3>

      <div className="options">
        <div className="option">
          <label>Product Name:</label>
          <select
              className="productName"
              value={productName}
              onChange={handleProductChange}
            >
              <option value="">Select Product</option>
              <option value="All Products">All Products</option>
              <option value="Coca cola">Coca cola</option>
              <option value="Fanta">Fanta</option>
              <option value="Sprite">Sprite</option>
              <option value="Pepsi">Pepsi</option>
              <option value="Mountain Dew">Mountain Dew</option>
            </select>
        </div>

        <div className="option">
          <label>Product Code:</label>
          <div className='abc'>
            <input
              type="text"
              id="productCode"
              value={productCode}
              readOnly
            />
          </div>
        </div>
        <div className='option'>
          <button className="button" onClick={handleSearch}>Search</button>
        </div>
      </div>

      <div className="stock-table">
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Code</th>
              <th>Total Purchased</th>
              <th>Total Sold</th>
              <th>Available</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((item, index) => (
              <tr key={index}>
                <td>{item.productName}</td>
                <td>{item.productCode}</td>
                <td>{item.totalPurchased}</td>
                <td>{item.totalSold}</td>
                <td>{item.totalPurchased - item.totalSold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockReport;
