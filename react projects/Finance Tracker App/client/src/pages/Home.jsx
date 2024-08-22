import React from 'react';

const Home = () => {
  return (
    <>

    <header>
      <nav>
        <a href="/">Finance Manager</a>
        <a href="/Data">Data</a>
        <a href="/Analysis">Analysis</a>
      </nav>
    </header>
    
    <main className="container">
      <div className="data">
        <form action="">
          <fieldset>
            <label htmlFor="what">What was purchased:</label>
            <input id='what' type="text" />
          </fieldset>
          <fieldset>
            <label htmlFor="where">Where was it purchased:</label>
            <input type="text" />
          </fieldset>
          <fieldset>
            <label htmlFor="categorized">This can be categorized as:</label>
            <select name="categories" id="">
              <option value="choose">Choose an option</option>
              <option value="" disabled>Automotive</option>
              <option value="">Gas</option>
              <option value="">Car Payment</option>
              <option value="">Vehicle Maintainence</option>
              <option value="">Parking</option>
              <option value="">Toll</option>

              <option value="" disabled>Household</option>
              <option value="">Rent</option>
              <option value="">Groceries</option>
              <option value="">Appliances</option>
              <option value="">Decor</option>
              <option value="">Office Supplies</option>

              <option value="" disabled>Dining</option>
              <option value="">Restaurants</option>
              <option value="">Coffee</option>
              <option value="">Fast Food</option>

              <option value="" disabled>Entertainment</option>
              <option value="">Movies</option>
              <option value="">Events</option>
              <option value="">Games</option>
              <option value="">Streaming Services</option>
              <option value="">Subscriptions</option>

              <option value="" disabled>Insurance</option>
              <option value="">Medical Insurance</option>
              <option value="">Dental Insurance</option>
              <option value="">Vision Insurance</option>
              <option value="">Life Insurance</option>
              <option value="">Health Insurance</option>

              <option value="" disabled>Personal</option>
              <option value="">Perscriptions</option>
              <option value="">Personal Care Product</option>
              <option value="">Personal Care Service</option>
              <option value="">Clothing</option>
              <option value="">Electronics</option>
              <option value="">Educational Loans</option>
              <option value="">Online Courses</option>
              <option value="">Travel Rental</option>
              
            </select>
          </fieldset>
        </form>
      </div>
      <div className="analysis"></div>
    </main>
    </>
  );
};

export default Home;
