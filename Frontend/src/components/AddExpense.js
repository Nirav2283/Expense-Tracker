import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function AddExpense() {
    const [data, setData] = useState({});
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = () => {
        if (!data.id || !data.name || !data.image || !data.price || !data.date || !data.description) {
            setErrorMessage("Please fill all the fields before submitting.");
            return;
        }

        setErrorMessage("");

        const apiUrl = "http://localhost:4000/product";
        fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(() => {
            toast.success("Added Sucessfully")
            navigate("/expenses");
        });
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-lg p-4">
            <h2 className="mb-4">Add New Expense</h2>

{errorMessage && (
    <div className="alert alert-danger" role="alert">
        {errorMessage}
    </div>
)}

<div className="form-group row mb-3">
    <label htmlFor="id" className="col-4 col-form-label">Enter ID</label>
    <div className="col-8">
        <input
            name="id"
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Enter product ID"
        />
    </div>
</div>

<div className="form-group row mb-3">
    <label htmlFor="name" className="col-4 col-form-label">Product Name</label>
    <div className="col-8">
        <input
            name="name"
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Enter product name"
        />
    </div>
</div>

<div className="form-group row mb-3">
    <label htmlFor="image" className="col-4 col-form-label">Image URL</label>
    <div className="col-8">
        <input
            name="image"
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Enter image URL"
        />
    </div>
</div>

<div className="form-group row mb-3">
    <label htmlFor="price" className="col-4 col-form-label">Price</label>
    <div className="col-8">
        <input
            name="price"
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Enter price"
        />
    </div>
</div>

<div className="form-group row mb-4">
    <label htmlFor="date" className="col-4 col-form-label">Date</label>
    <div className="col-8">
        <input
            name="date"
            onChange={handleChange}
            type="date"
            className="form-control"
            placeholder="Select a date"
        />
    </div>
</div>

<div className="form-group row mb-4">
    <label htmlFor="description" className="col-4 col-form-label">Description</label>
    <div className="col-8">
        <textarea
            name="description"
            onChange={handleChange}
            className="form-control"
            placeholder="Enter product description"
        ></textarea>
    </div>
</div>

<div className="form-group row">
    <div className="offset-4 col-8">
        <button onClick={handleSubmit} className="btn btn-primary">
            Add Expense
        </button>
    </div>
</div>
            </div>
        </div>
    );
}

export default AddExpense;
