import React, { useState } from 'react';
import logo from './Logo.jpg'; // Import your logo file

function SellPageDelta() {
  const [CustomerId, setCustomerId] = useState('');
  const [SellDate, setSellDate] = useState(getTodayDate());
  const [productName, setProductName] = useState('');
  const [productCode, setProductCode] = useState('');
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('');
  const [total, setTotal] = useState('')

  // Function to get today's date in the format YYYY-MM-DD
  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function calculateTotal() 
  {
    const totalPrice = quantity * price;
    setTotal(totalPrice);    
  }

  const handleQuantityChange = (e) => 
  {    
    const newQuantity = Number(e.target.value);
    setQuantity(newQuantity);
    const totalPrice = newQuantity * price;
    
    calculateTotal(newQuantity); // Calculate total when quantity changes
    setTotal(totalPrice);
  };
  

  // Function to handle product selection from dropdown
  const handleProductChange = (e) => {
    const selectedProduct = e.target.value;
    setProductName(selectedProduct);

    // Logic to generate product code based on selected product
    switch (selectedProduct) {
      case 'Coca cola':
        setProductCode('CC001');
        setPrice(2300);
        break;
      case 'Fanta':
        setProductCode('FT001');
        setPrice(2300);
        break;
      case 'Sprite':
        setProductCode('SP001');
        setPrice(2300);
        break;
      case 'Pepsi':
        setProductCode('PS001');
        setPrice(3100);
        break;
      case 'Mountain Dew':
        setProductCode('MD001');
        setPrice(3100);
        break;
      default:
        setProductCode('');
        setPrice(0);
    }
    calculateTotal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle submission
    console.log('Customer ID: ', CustomerId);
    console.log('Sell Date:', SellDate);
    console.log('Product Name:', productName);
    console.log('Product Code:', productCode);
    console.log('Price:',price)
    console.log('Quantity:', quantity); // Log quantity
    console.log('Total', total);

    // Clear fields after submission
    setCustomerId('');
    setSellDate(getTodayDate());
    setProductName('');
    setProductCode('');
    setPrice(0);
    setQuantity(''); // Clear quantity
    setTotal(0);
  };

  return (
    <div style={styles.container}>
      <img src={logo} alt="Logo" style={styles.logo} />
      <h1 style={styles.heading}>Sell Page</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.fieldContainer}>
          <label htmlFor="CustomerID" style={styles.label}>Customer ID:</label>
          <div style={styles.inputContainer}>
            <input
              type="text"
              id="CustomerID"
              value={CustomerId}
              onChange={(e) => setCustomerId(e.target.value)}
              style={styles.input}
            />
          </div>
        </div>
        <div style={styles.fieldContainer}>
          <label htmlFor="SellDate" style={styles.label}>Sell Date:</label>
          <div style={styles.inputContainer}>
            <input
              type="date"
              id="SellDate"
              value={SellDate}
              onChange={(e) => setSellDate(e.target.value)}
              style={styles.input}
            />
          </div>
        </div>
        <div style={styles.fieldContainer}>
          <label htmlFor="productName" style={styles.label}>Product Name:</label>
          <div style={styles.inputContainer}>
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
        </div>
        <div style={styles.fieldContainer}>
          <label htmlFor="productCode" style={styles.label}>Product Code:</label>
          <div style={styles.inputContainer}>
            <input
              type="text"
              id="productCode"
              value={productCode}
              readOnly
              style={styles.input}
            />
          </div>
        </div>
        <div style={styles.fieldContainer}>
          <label htmlFor="price" style={styles.label}>Price (Ksh) :</label>
          <div style={styles.inputContainer}>
            <input
              type="number"
              id="price"
              value={price}
              readOnly
              style={styles.input}
            />
          </div>
        </div>
        <div style={styles.fieldContainer}>
          <label htmlFor="quantity" style={styles.label}>Quantity (per carton):</label>
          <div style={styles.inputContainer}>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              style={styles.input}
            />
          </div>
        </div>

        <div style={styles.fieldContainer}>
          <label htmlFor="Total" style={styles.label}>Total:</label>
          <div style={styles.inputContainer}>
            <input
              type="number"
              id="Total"
              onChange={calculateTotal}
              readOnly
              value={total}
              style={styles.input}
            />
          </div>
        </div>
        <button type="submit" style={styles.button}>Sell</button>
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
    height: '700px',
    marginTop:'5px',
    fontSize:'16px',
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
    width: '100%',
  },
  label: {
    minWidth: '120px',
    marginRight: '10px',
  },
  inputContainer: {
    flex: '1',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    width: '100%',
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

export default SellPageDelta;
