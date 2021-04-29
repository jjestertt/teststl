import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function Users(props) {
    const [sortValue, setSortValue] = useState('id');

    const onChangeSort = (value) => {
        setSortValue(value);
        props.sortBy(value);
    }


    //Метод map перебирает всех персон в массиве
    // и возвращает массив но уже с нужным нам jsx
    const renderUsers = props.users.map(user => (
        <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.country}</td>
            <td>{user.age}</td>
            <td>
                <button className="btn btn-sm btn-danger mr-1" onClick={() => {
                    props.deleteUserHandler(user.id)
                }}>Del
                </button>
                {/*Предаем нашего юзера в компонент редактирования*/}
                <Link className="btn btn-sm btn-primary mr-1"
                      to={{
                          pathname: '/edit',
                          state: {
                              user
                          }
                      }}
                >
                    Edit
                </Link>
            </td>
        </tr>
    ));

    return (
        <>
            <h1>User Data</h1>
            <form className="mb-3 text-right" onSubmit={e => e.preventDefault()}>
                <div className="form-row d-flex justify-content-end">
                    <div className="col-2">
                        <label htmlFor="country">Sort by</label>
                        <select className="custom-select" id="country" required
                                value={sortValue} onChange={e => {
                            onChangeSort(e.target.value)
                        }}
                        >
                            <option value='id'>Id</option>
                            <option value="name">Name</option>
                            <option value="age">Age</option>
                        </select>
                    </div>
                </div>
            </form>
            <table className="table table-striped table-sm mb-3">
                <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Country</th>
                    <th>Age</th>
                    <th>Buttons</th>
                </tr>
                </thead>
                <tbody>
                {renderUsers}
                </tbody>
            </table>
        </>

    );
}