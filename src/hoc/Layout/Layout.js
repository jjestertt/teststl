import React, {useState} from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EditUser from "../../components/EditUser/EditUser";
import {Switch, Route, Redirect} from "react-router-dom";
import fixtures from "../../data/fixtures";
import Users from "../../containers/Users/Users";

export default function Layout(){
    const [users, setUsers] = useState(fixtures);

    //Удаляем юзера
    const deleteUserHandler = (id) => {
        const newUsers = users.filter(user => user.id !== id);
        setUsers(newUsers);
    }
    //Изменение данных юзера
    const changeUserHandler = (id, values) => {
        const newUsers = users.map(user => {
            if (user.id === id) {
                return {
                    id,
                    ...values
                }
            }
            return user;
        });
        setUsers(newUsers);
    }
    //Сортировка массива юзеров по свойству
    const sortBy = (prop) => {
        const newUsers = [...users];
        newUsers.sort(function (a, b) {
            if (a[prop] > b[prop]) {
                return 1;
            }
            if (a[prop] < b[prop]) {
                return -1;
            }
            // a должно быть равным b
            return 0;
        });
        setUsers(newUsers);
    }

    return(
        <>
            <Header />
                <main role="main" className="container flex-shrink-0">
                    <Switch>
                        <Route exact={true} path="/" render={()=>
                            <Users users={users} deleteUserHandler={deleteUserHandler}
                                   sortBy={sortBy}
                            />}
                        />
                        <Route path='/edit' render={()=> <EditUser changeUserHandler={changeUserHandler}/>} />
                        <Route render={() => {<Redirect to='/' />}} />
                    </Switch>
                </main>
            <Footer />
        </>
    );
}