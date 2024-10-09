import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <header className="bg-primary text-white text-center py-5">
        <h1>Expense Management System</h1>
        <p className="lead">Manage your inventory, sales, and daily expenses with ease.</p>
        <Link to="/expenses" className="btn btn-light btn-lg mt-3">
          Go to Management
        </Link>
      </header>

     
      <section id="features" className="container my-5">
        <h2 className="text-center mb-4">Key Features</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm mb-4">
              <img
                src="https://i0.wp.com/www.globaltrademag.com/wp-content/uploads/2022/04/shutterstock_585073000-scaled.jpg?fit=2560%2C1706&ssl=1"
                className="card-img-top"
                alt="Inventory Management"
                style={{height:"415px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Inventory Management</h5>
                <p className="card-text">
                  Keep track of all your items and manage stock levels effectively.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm mb-4">
              <img
                src="https://spotio.com/wp-content/uploads/2020/07/Sales-Tracking-What-It-Is-How-to-Harness-It-In-2020_FI-768x369.png"
                className="card-img-top"
                alt="Sales Management"
                style={{height : "415px"}}
              />
              <div className="card-body">
                <h5 className="card-title">Sales Tracking</h5>
                <p className="card-text">
                  Monitor daily sales and calculate profit or loss efficiently.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm mb-4">
              <img
                src="https://media.licdn.com/dms/image/v2/D5612AQGplp7JKG6Iiw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1673950361361?e=2147483647&v=beta&t=L4d5P81GijVgU4u1yJtFLVsIqATkfWTrymEPSd_C6_o"
                className="card-img-top"
                alt="Expense Tracking"
                style={{height : "415px"}}
              />
              <div className="card-body">
                <h5 className="card-title">Expense Tracking</h5>
                <p className="card-text">
                  Record your daily expenses and control your budget effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2024 Expense Management System | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Home;
