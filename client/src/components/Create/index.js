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
                    <label htmlFor="product_name">product_name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="product_name"
                        value={form.product_name}
                        onChange={(e) => updateForm({ product_name: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">price</label>
                    <input
                        type="text"
                        className="form-control"
                        id="price"
                        value={form.price}
                        onChange={(e) => updateForm({ price: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="product_description">product_description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="product_description"
                        value={form.product_description}
                        onChange={(e) => updateForm({ product_description: e.target.value })}
                    />
                </div>

                <FileBase64
                    multiple={true}
                    onDone={(e) => updateForm({ image_url: e.target.value })} />

                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="positionOptions"
                            id="positionIntern"
                            value="Intern"
                            checked={form.level === "Intern"}
                            onChange={(e) => updateForm({ level: e.target.value })}
                        />
                        <label htmlFor="positionIntern" className="form-check-label">Intern</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="positionOptions"
                            id="positionJunior"
                            value="Junior"
                            checked={form.level === "Junior"}
                            onChange={(e) => updateForm({ level: e.target.value })}
                        />
                        <label htmlFor="positionJunior" className="form-check-label">Junior</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="positionOptions"
                            id="positionSenior"
                            value="Senior"
                            checked={form.level === "Senior"}
                            onChange={(e) => updateForm({ level: e.target.value })}
                        />
                        <label htmlFor="positionSenior" className="form-check-label">Senior</label>
                    </div>
                </div>

                <div className="form-group">
                    <input
                        type="submit"
                        value="Create person"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
}

export default Create