import React from "react";
import {useFormik} from "formik";
import {withRouter} from "react-router-dom";

function EditUser(props) {
    //Получаем юзера из пропсов с помощью withRouter
    const {id, name, phone, email, country, age} = props.location.state.user;

    const editUser = useFormik({
        initialValues: {
            name: name,
            phone: phone,
            email: email,
            country: country,
            age: age
        },
        onSubmit: values => {
            props.location.pathname = '/';
            props.changeUserHandler(id, values);
        }
    });

    return (
        <>
            <h1>Edit Person</h1>
            <form onSubmit={editUser.handleSubmit} className="mb-3">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="name" required
                           {...editUser.getFieldProps('name')}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Phone">Phone</label>
                    <input type="text" className="form-control" id="phone" aria-describedby="phone" required
                           {...editUser.getFieldProps('phone')}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" aria-describedby="email" required
                           {...editUser.getFieldProps('email')}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <select className="custom-select" id="country" required
                            {...editUser.getFieldProps('country')}>
                        <option value='Russia' >Russia</option>
                        <option value="USA">USA</option>
                        <option value="Australia">Australia</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="text" className="form-control" id="age" aria-describedby="age"
                           {...editUser.getFieldProps('age')}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Change</button>
            </form>
        </>
    );
}

export default withRouter(EditUser);