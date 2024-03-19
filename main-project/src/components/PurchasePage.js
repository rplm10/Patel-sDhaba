import React, { useState } from 'react';
import logo from './Logo.jpg'; // Import your logo file

function PurchasePage() {
  const [orderNo, setOrderNo] = useState('001');
  const [companyName, setCompanyName] = useState('');
  const [companyCode, setCompanyCode] = useState('');
  const [productName, setProductName] = useState('');
  const [productCode, setProductCode] = useState('');

  // Function to handle company selection from dropdown
  const handleCompanyChange = (e) => {
    const selectedCompany = e.target.value;
    setCompanyName(selectedCompany);
    // Logic to generate company code based on selected company
    switch (selectedCompany) {
      case 'Coca Cola':
        setCompanyCode('CC');
        break;
      case 'PepsiCo':
        setCompanyCode('PP');
        break;
      case 'Red Bull':
        setCompanyCode('RB');
        break;
      case 'Monster Beverage Corporation':
        setCompanyCode('MBC');
        break;
      case 'National Beverage Corp. (FIZZ)':
        setCompanyCode('NBFC');
        break;
      case 'Cott Corporation':
        setCompanyCode('CCorp');
        break;
      case 'Jones Soda Co.':
        setCompanyCode('JSC');
        break;
      // Add more cases for other companies if needed
      default:
        setCompanyCode('');
    }
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle submission
    console.log('Order No:', orderNo);
    console.log('Company Name:', companyName);
    console.log('Company Code:', companyCode);
    console.log('Product Name:', productName);
    console.log('Product Code:', productCode);
    // Clear fields after submission
    setOrderNo((prevOrderNo) => String(Number(prevOrderNo) + 1).padStart(3, '0'));
    setCompanyName('');
    setCompanyCode('');
    setProductName('');
    setProductCode('');
  };

  return (
    <div style={styles.container}>
      <img src={logo} alt="Logo" style={styles.logo} />
      <h1 style={styles.heading}>Purchase Page</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.fieldContainer}>
          <label htmlFor="orderNo" style={styles.label}>Order No:</label>
          <div style={styles.inputContainer}>
            <input
              type="text"
              id="orderNo"
              value={orderNo}
              readOnly
              style={styles.input}
            />
          </div>
        </div>
        <div style={styles.fieldContainer}>
          <label htmlFor="companyName" style={styles.label}>Company Name:</label>
          <div style={styles.inputContainer}>
            <select
              id="companyName"
              value={companyName}
              onChange={handleCompanyChange}
              style={styles.input}
            >
              <option value="">Select Company</option>
              <option value="Coca Cola">Coca Cola</option>
              <option value="PepsiCo">PepsiCo</option>
              <option value="Red Bull">Red Bull</option>
              <option value="Monster Beverage Corporation">Monster Beverage Corporation</option>
              <option value="National Beverage Corp. (FIZZ)">National Beverage Corp. (FIZZ)</option>
              <option value="Cott Corporation">Cott Corporation</option>
              <option value="Jones Soda Co.">Jones Soda Co.</option>
            </select>
          </div>
        </div>
        <div style={styles.fieldContainer}>
          <label htmlFor="companyCode" style={styles.label}>Company Code:</label>
          <div style={styles.inputContainer}>
            <input
              type="text"
              id="companyCode"
              value={companyCode}
              readOnly
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

export default PurchasePage;
