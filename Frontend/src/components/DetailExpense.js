import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DetailExpense() {
    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const apiUrl = `http://localhost:4000/product/${id}`;
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.error(err));
    }, [id]);

    return (
        <div className="container mt-5">
            <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>Back</button>
            <div className="card">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={data.image} className="img-fluid rounded-start" alt={data.name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">Product Name: {data.name}</h2>
                            <h5 className="card-text"><strong>Price:</strong> ₹{data.price} Only</h5>
                            <p className="card-text"><strong>Description:</strong> {data.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailExpense;
