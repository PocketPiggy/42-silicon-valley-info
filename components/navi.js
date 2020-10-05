import React from "react";
import Link from "next/link";
import {
        Navbar,
        Nav,
        NavDropdown,
        Form,
        FormControl,
        Button,
} from "react-bootstrap";
//import Navbar from 'react-bootstrap/Navbar'
//import Nav from 'react-bootstrap/Nav'
//import NavDropdown from 'react-bootstrap/NavDropdown'
//import Form from 'react-bootstrap/Form'
//import FormControl from 'react-bootstrap/FormControl'
//import Button from 'react-bootstrap/Button'

export default function NavigationBar() {
        return (
                <div>
                        <Navbar bg="dark" expandi="lg">
                                <Navbar.Brand href="/">
                                        <img
                                                src="/vercel.svg"
                                                //width="30"
                                                //height="30"
                                                className="d-inline-block align-top"
                                                alt="Vercel logo"
                                        />
                                </Navbar.Brand>
                        </Navbar>
                </div>
        );
}

/*
const links = [
    {}
]
//export default function Navbar() {
export default function Navbar({ routes }) {
    return (
        <div>
            <h4>This is the Navigation bar for desktop.</h4>
            <ul className="navbar-list">
                {routes.map((route) => (
                    <li className="navbar-item" key={route.toString() + ` li`}>
                        <Link key={route.toString()} href={`${route}`}>
                            <a>{route}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getStaticProps(routes) {
    console.log(routes);
    return [
        {
            props: {
                pages: {
                    home: "/",
                    preparation: {
                        before_the_piscine: "/Before_the_Piscine",
                        cli_and_bash: "/CLI_and_bash",
                        text_editor: "/Text_Editor",
                        git: "/Git",
                        clang: "/The_C_Programming_Language",
                        review: "/Putting_it_all_together",
                    },
                    updates: "/Updates",
                    pros_and_cons: "/Pros_and_Cons",
                    history_of_42: "/History_of_42",
                    about: "/About",
                    contact: "/Contact",
                },
            },
        },
    ];
}
*/
