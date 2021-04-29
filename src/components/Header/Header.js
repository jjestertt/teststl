import React from "react";
import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <header className="mb-3">
            <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">People</NavLink>
                </div>
            </nav>
        </header>
    );
}