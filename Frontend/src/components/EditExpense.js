import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function EditExpense() {
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const apiUrl = "http://localhost:4000/product/" + id;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((res) => {
                
                setData(res);
               
            });
    }, [id]);

    return (
        <div className="container mt-5">
            <div className="card shadow-lg p-4">
                <h2 className="mb-4">Edit Expense</h2>
                <div className="form-group row mb-3">
                    <label htmlFor="text3" className="col-4 col-form-label">Product ID</label>
                    <div className="col-8">
                        <input
                            value={data.id}
                            onChange={(e) => {
                                setData({ ...data, id: e.target.value });
                            }}
                            type="text"
                            className="form-control"
                            placeholder="Enter Product ID"
                        />
                    </div>
                </div>

                <div className="form-group row mb-3">
                    <label htmlFor="text1" className="col-4 col-form-label">Product Name</label>
                    <div className="col-8">
                        <input
                            value={data.name}
                            onChange={(e) => {
                                setData({ ...data, name: e.target.value });
                            }}
                            type="text"
                            className="form-control"
                            placeholder="Enter Product Name"
                        />
                    </div>
                </div>

                <div className="form-group row mb-3">
                    <label htmlFor="text" className="col-4 col-form-label">Image URL</label>
                    <div className="col-8">
                        <input
                            value={data.image}
                            onChange={(e) => {
                                setData({ ...data, image: e.target.value });
                            }}
                            type="text"
                            className="form-control"
                            placeholder="Enter Image URL"
                        />
                    </div>
                </div>

                <div className="form-group row mb-3">
                    <label htmlFor="text2" className="col-4 col-form-label">Price</label>
                    <div className="col-8">
                        <input
                            value={data.price}
                            onChange={(e) => {
                                setData({ ...data, price: e.target.value });
                            }}
                            type="text"
                            className="form-control"
                            placeholder="Enter Price"
                        />
                    </div>
                </div>

                <div className="form-group row mb-3">
                    <label htmlFor="description" className="col-4 col-form-label">Description</label>
                    <div className="col-8">
                        <textarea
                            value={data.description || ''}
                            onChange={(e) => {
                                setData({ ...data, description: e.target.value });
                            }}
                            className="form-control"
                            placeholder="Enter Product Description"
                        />
                    </div>
                </div>

            <div className="form-group row mb-4">
                <label htmlFor="date" className="col-4 col-form-label">Date</label>
                <div className="col-8">
                    <input
                        value={data.date}
                        name="date"
                        onChange={(e) => {
                            setData({ ...data, date: e.target.value });
                        }}
                        type="date"
                        className="form-control"
                        placeholder="Select a date"
                    />
                </div>
            </div>

                <div className="form-group row">
                    <div className="offset-4 col-8">
                        <button
                            onClick={() => {
                                const apiUrl = "http://localhost:4000/product/" + id;
                                fetch(apiUrl, {
                                    method: "PATCH",
                                    body: JSON.stringify(data),
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                })
                                    .then((res) => res.json())
                                    .then(() => {
                                        toast.success("Edited Sucessfully")
                                        navigate("/expenses");
                                    });
                            }}
                            className="btn btn-primary w-100"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditExpense;
