import React, { useState } from 'react';
import './salesreport.css';
import logo from './Logo.jpg'; // Import your logo file

const SaleReportDelta = () => {
  const [salesData, setSalesData] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [productName, setProductName] = useState('');
  const [productCode, setProductCode] = useState('');
  //const [price, setPrice] =useState('');
  const [customerId, setCustomerId] = useState('');

  const handleSearch = () => {
    // Here you would implement logic to fetch sales data based on the search criteria
    // For simplicity, let's assume salesData is fetched from an API or database
     // add the function of fetching the data from the db
    const filteredData = salesData.filter(item => item.productCode === productCode);
    setSalesData(filteredData);
};

    // Function to handle product selection from dropdown
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
    <div className="sale-report-container">
      
      <img src={logo} className='logo' alt="Logo"/>
      <h3> Sales Report Delta</h3>
      
      <div className="options">
        <div className="option">
          <label>From:</label>
          <div className='from'>
          <input type="date" 
          value={startDate} 
          onChange={(e) => setStartDate(e.target.value)} />
          </div>
        </div>

        <div className="option">
            
          <label>To:</label>
          <div className='to'>
          <input type="date" 
          value={endDate} 
          onChange={(e) => setEndDate(e.target.value)} />
          </div>
        </div>

        <br></br><br/>

        <div className='prodid'>
        <div className="option">
          <label>Product Name:</label>
          <select
              className="productName"
              value={productName}
              onChange={handleProductChange}
            >
              <option value="">Select Product</option>
              <option value="All Products"> All Products</option>
              <option value="Coca cola">Coca cola</option>
              <option value="Fanta">Fanta</option>
              <option value="Sprite">Sprite</option>
              <option value="Pepsi">Pepsi</option>
              <option value="Mountain Dew">Mountain Dew</option>
            </select>
        </div>
        </div>

        <div className="option">
          <label>Product Code:</label>
          <div className='productCode'>
            <input
              type="text"
              id="productCode"
              value={productCode}
              readOnly
            />
          </div>
        </div>

        <div className="option">
          <label>Customer ID:</label>
          <div className="customerID">
          <input type="text"
          value={customerId} 
          onChange={(e) => setCustomerId(e.target.value)} />
          </div>
        </div>
        
        <div className='option'>
        <br/>
        <button className="button" onClick={handleSearch}>Search</button>
        </div>
      </div>
      <br/>
      <br/>

      <div className="sales-table">
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Code</th>
              <th>Date</th>
              <th>Customer ID</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((sale, index) => (
              <tr key={index}>
                <td>{sale.productName}</td>
                <td>{sale.productCode}</td>
                <td>{sale.date}</td>
                <td>{sale.customerId}</td>
                <td>{sale.price}</td>
                <td>{sale.quantity}</td>
                <td>{sale.price * sale.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
};


export default SaleReportDelta;
