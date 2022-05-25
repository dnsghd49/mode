import "./style.css"
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

function Edit() {
    const [form, setForm] = useState({
        product_name: "",
        price: "",
        product_description: "",
        image_url: "",
    });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const id = params.id.toString();
            const response = await fetch(`http://localhost:5000/products/${params.id.toString()}`);

            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const record = await response.json();
            if (!record) {
                window.alert(`Record with id ${id} not found`);
                navigate("/");
                return;
            }

            setForm(record);
        }

        fetchData();

        return;
    }, [params.id, navigate]);

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        e.preventDefault();
        const editedItem = {
            product_name: form.product_name,
            price: form.price,
            product_description: form.product_description,
            image_url: form.image_url,
        };

        // This will send a post request to update the data in the database.
        await fetch(`http://localhost:5000/update/${params.id}`, {
            method: "POST",
            body: JSON.stringify(editedItem),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        navigate("/dashboard");
    }

    // This following section will display the form that takes input from the user to update the data.
    return (
        <div>
            <h3>Update Record</h3>
            <form className="edit-spacing" onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="product_name">Product Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="product_name"
                        value={form.product_name}
                        onChange={(e) => updateForm({ product_name: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                        type="text"
                        className="form-control"
                        id="price"
                        value={form.price}
                        onChange={(e) => updateForm({ price: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="product_description">Product Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="product_description"
                        value={form.product_description}
                        onChange={(e) => updateForm({ product_description: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="product_description">Image Url</label>
                    <input
                        type="text"
                        className="form-control"
                        id="image_url"
                        value={form.image_url}
                        onChange={(e) => updateForm({ image_url: e.target.value })}
                    />
                </div>
                <br />

                <div className="form-group">
                    <input
                        type="submit"
                        value="Update Record"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit