import React, { useState } from 'react';
import logo from '/vs code/react/Patel-sDhaba/main-project/src/images/Logo.jpg'; // Import your logo file

function PurchasePage() {
  const [orderNo, setOrderNo] = useState('001');
  const [orderDate, setOrderDate] = useState(getTodayDate());
  const [productName, setProductName] = useState('');
  const [productCode, setProductCode] = useState('');
  const [quantity, setQuantity] = useState(''); // Add quantity state

  // Function to get today's date in the format YYYY-MM-DD
  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle submission
    console.log('Order No:', orderNo);
    console.log('Order Date:', orderDate);
    console.log('Product Name:', productName);
    console.log('Product Code:', productCode);
    console.log('Quantity:', quantity); // Log quantity
    // Clear fields after submission
    setOrderNo((prevOrderNo) => String(Number(prevOrderNo) + 1).padStart(3, '0'));
    setOrderDate(getTodayDate());
    setProductName('');
    setProductCode('');
    setQuantity(''); // Clear quantity
  };

  return (
    <div style={styles.container}>
      <img src={logo} alt="Logo" style={styles.logo} />
      <h1 style={styles.heading}>Purchase Page</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.fieldContainer}>
          <label htmlFor="orderNo">Order No:</label>
          <input
            type="text"
            id="orderNo"
            value={orderNo}
            readOnly
            style={styles.input}
          />
        </div>
        <div style={styles.fieldContainer}>
          <label htmlFor="orderDate">Order Date:</label>
          <input
            type="date"
            id="orderDate"
            value={orderDate}
            onChange={(e) => setOrderDate(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.fieldContainer}>
          <label htmlFor="productName">Product Name:</label>
          <select
            id="productName"
            value={productName}
            onChange={handleProductChange}
            style={styles.input}
          >
            <option value="">Select Product</option>
            <option value="Coca cola">Coca cola</option>
            <option value="Fanta">Fanta</option>
            <option value="Sprite">Sprite</option>
            <option value="Pepsi">Pepsi</option>
            <option value="Mountain Dew">Mountain Dew</option>
          </select>
        </div>
        <div style={styles.fieldContainer}>
          <label htmlFor="productCode">Product Code:</label>
          <input
            type="text"
            id="productCode"
            value={productCode}
            readOnly
            style={styles.input}
          />
        </div>
        <div style={styles.fieldContainer}>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Purchase</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  logo: {
    width: '150px',
    marginBottom: '20px',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  fieldContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  },
  input: {
    marginLeft: '10px',
    padding: '8px',
    fontSize: '16px',
    width: '250px',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default PurchasePage;
