// App.jsx
import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    what: '',
    where: '',
    categorized: '',
    price: '',
    when: ''
  });
  const [dataTable, setDataTable] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataTable([...dataTable, formData]);
    localStorage.setItem('purchaseData', JSON.stringify([...dataTable, formData]));
    setFormData({
      what: '',
      where: '',
      categorized: '',
      price: '',
      when: ''
    });
  };

  return (
    <div className="container">
      <header>
        <h1>Purchase Form</h1>
      </header>

      <main>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="what">What was purchased:</label>
            <input id="what" name="what" type="text" value={formData.what} onChange={handleChange} />
          </fieldset>

          <fieldset>
            <label htmlFor="where">Where was it purchased from:</label>
            <input id="where" name="where" type="text" value={formData.where} onChange={handleChange} />
          </fieldset>

          <fieldset>
            <label htmlFor="categorized">This can be categorized as:</label>
            <select name="categorized" id="categorized" value={formData.categorized} onChange={handleChange}>
              <option value="choose">Choose an option</option>
              <option value="Automotive">Automotive</option>
              <option value="Gas">Gas</option>
              <option value="Car Payment">Car Payment</option>
              <option value="Vehicle Maintenance">Vehicle Maintenance</option>
              <option value="Parking">Parking</option>
              <option value="Toll">Toll</option>

              <option value="Household">Household</option>
              <option value="Rent">Rent</option>
              <option value="Groceries">Groceries</option>
              <option value="Appliances">Appliances</option>
              <option value="Decor">Decor</option>
              <option value="Office Supplies">Office Supplies</option>

              <option value="Dining">Dining</option>
              <option value="Restaurants">Restaurants</option>
              <option value="Coffee">Coffee</option>
              <option value="Fast Food">Fast Food</option>

              <option value="Entertainment">Entertainment</option>
              <option value="Movies">Movies</option>
              <option value="Events">Events</option>
              <option value="Games">Games</option>
              <option value="Streaming Services">Streaming Services</option>
              <option value="Subscriptions">Subscriptions</option>

              <option value="Insurance">Insurance</option>
              <option value="Medical Insurance">Medical Insurance</option>
              <option value="Dental Insurance">Dental Insurance</option>
              <option value="Vision Insurance">Vision Insurance</option>
              <option value="Life Insurance">Life Insurance</option>
              <option value="Health Insurance">Health Insurance</option>

              <option value="Personal">Personal</option>
              <option value="Prescriptions">Prescriptions</option>
              <option value="Personal Care Product">Personal Care Product</option>
              <option value="Personal Care Service">Personal Care Service</option>
              <option value="Clothing">Clothing</option>
              <option value="Electronics">Electronics</option>
              <option value="Educational Loans">Educational Loans</option>
              <option value="Online Courses">Online Courses</option>
              <option value="Travel Rental">Travel Rental</option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="price">How much was it:</label>
            <input id="price" name="price" type="text" value={formData.price} onChange={handleChange} />
          </fieldset>

          <fieldset>
            <label htmlFor="when">When was it purchased:</label>
            <input id="when" name="when" type="date" value={formData.when} onChange={handleChange} />
          </fieldset>

          <button type="submit">Submit</button>
        </form>

        {dataTable.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>What</th>
                <th>Where</th>
                <th>Category</th>
                <th>Price</th>
                <th>When</th>
              </tr>
            </thead>
            <tbody>
              {dataTable.map((item, index) => (
                <tr key={index}>
                  <td>{item.what}</td>
                  <td>{item.where}</td>
                  <td>{item.categorized}</td>
                  <td>{item.price}</td>
                  <td>{item.when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <section className="container">
          Spending Breakdown
        </section>
      </main>

      <footer>
        <p>© 2024 My React App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
