import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import toast from 'react-hot-toast';

function GetAllExpense() {
    const [data, setData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showModal, setShowModal] = useState(false); 
    const [selectedId, setSelectedId] = useState(null); 
    const navigate = useNavigate();

    useEffect(() => {
        const apiUrl = "http://localhost:4000/product";
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => {
                setData(res);
                calculateTotal(res);
            })
            .catch((error)=>{
                console.log(error);
                toast.error("Server Error!!")
            })
    }, []);

    const calculateTotal = (expenses) => {
        const total = expenses.reduce((total, exp) => total + exp.price, 0);
        setTotalPrice(total);
    };

    const handleDelete = (id) => {
        const apiUrl = `http://localhost:4000/product/${id}`;
        fetch(apiUrl, { method: "DELETE" })
            .then(res => {
                if (res.ok) {
                    const updatedData = data.filter(exp => exp._id !== id);
                    setData(updatedData);
                    calculateTotal(updatedData);
                    toast.success("Deleted Successfully");
                    handleClose();
                } else {
                    toast.error("Delete failed");
                }
            });
    };
   

    const handleShow = (id) => {
        setSelectedId(id); 
        setShowModal(true); 
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedId(null); 
    };

    const formattedExpenses = data.map((exp) => (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={exp._id}>
            <div className="card h-100">
                <div className="card-body p-3 shadow-lg border border-warning rounded-3">
                    <h5 className="card-title">Product Name: {exp.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Price : ₹{exp.price}</h6>
                    <p className="card-text">{exp.description}</p>
                    <p className="card-text">date: {exp.date}</p>
                    <div className='mt-5' align="center">
                    <Link className="btn btn-info mx-2" to={`/expenses/${exp._id}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                    </svg></Link>


                    <Link className="btn btn-warning mx-2" to={`/expenses/edit/${exp._id}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                    </svg></Link>


                        <button className="btn btn-danger mx-2" onClick={() => handleShow(exp._id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <>
            <div className="container mt-5">
                <h2 className="text-center mb-4">Expense List</h2>
                <div className="row">
                    {formattedExpenses}
                </div>
            </div>
            <h4 className="text-end mt-4">Total Price: ₹{totalPrice}</h4>
            <button className="btn btn-danger" style={{float:"right"}} onClick={()=>{
                const apiUrl = "http://localhost:4000/product";
                fetch(apiUrl , {method : "DELETE"})
                .then(res=>res.json())
                .then(res=>{
                    window.location.reload();
                    toast.success("Deleted Successfully");
                    
                });
            }}>Delete All</button>


            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Expense</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this expense?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(selectedId)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default GetAllExpense;
