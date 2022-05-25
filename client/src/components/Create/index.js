import React, { useState } from "react";
import { useNavigate } from "react-router";
import FileBase64 from 'react-file-base64';

function Create() {
    const [form, setForm] = useState({
        product_name: "",
        price: "",
        product_description: "",
        image_url: "",
    });
    const navigate = useNavigate();

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault();

        // When a post request is sent to the create url, we'll add a new record to the database.
        const newPerson = { ...form };

        await fetch("http://localhost:5000/record/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
        })
            .catch(error => {
                window.alert(error);
                return;
            });

        setForm({ product_name: "", price: "", product_description: "" });
        navigate("/");
    }

    // This following section will display the form that takes the input from the user.
    return (
        <div>
            <h3>Register a new product</h3>
            <form onSubmit={onSubmit}>
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

                {/* <FileBase64
                    multiple={true}
                    onDone={(e) => updateForm({ image_url: e.target.value })} /> */}

                <div className="form-group">
                    <input
                        type="submit"
                        value="Create Item"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
}

export default Create