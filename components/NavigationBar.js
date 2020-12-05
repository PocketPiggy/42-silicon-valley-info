import Link from "next/link";
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavigationBar() {
    return (
        <div id="nav-container">
            <Navbar bg="dark" expand="lg">
                <Link href="/" passHref>
                    <Navbar.Brand href="/">
                        <FontAwesomeIcon icon="home" /> Home
                    </Navbar.Brand>
                </Link>

                <Navbar.Toggle />

                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown title="Preparation" id="preparation-drop">
                            <Link
                                href="/Preparation/Before_the_Piscine"
                                passHref
                            >
                                <NavDropdown.Item>
                                    Before the Piscine
                                </NavDropdown.Item>
                            </Link>

                            <Link href="/Preparation/CLI_and_Zsh" passHref>
                                <NavDropdown.Item>CLI & Zsh</NavDropdown.Item>
                            </Link>

                            <Link href="/Preparation/Text_Editor" passHref>
                                <NavDropdown.Item>Text Editor</NavDropdown.Item>
                            </Link>

                            <Link href="/Preparation/Git" passHref>
                                <NavDropdown.Item>Git</NavDropdown.Item>
                            </Link>

                            <Link
                                href="/Preparation/The_C_Programming_Language"
                                passHref
                            >
                                <NavDropdown.Item>
                                    The C language
                                </NavDropdown.Item>
                            </Link>

                            <Link
                                href="/Preparation/Putting_it_all_together"
                                passHref
                            >
                                <NavDropdown.Item>
                                    Putting it all together
                                </NavDropdown.Item>
                            </Link>
                        </NavDropdown>

                        <NavDropdown title="Sources">
                            <Link href="/Sources" passHref>
                                <NavDropdown.Item>All Sources</NavDropdown.Item>
                            </Link>

                            <Link href="/Sources/Blogs_and_reviews" passHref>
                                <NavDropdown.Item>
                                    Blogs & Reviews
                                </NavDropdown.Item>
                            </Link>

                            <Link href="/Sources/Dorms" passHref>
                                <NavDropdown.Item>Dorms</NavDropdown.Item>
                            </Link>

                            <Link href="/Sources/TownHalls" passHref>
                                <NavDropdown.Item>Town Halls</NavDropdown.Item>
                            </Link>

                            <Link href="/Sources/Github_repos" passHref>
                                <NavDropdown.Item>
                                    Github Repos
                                </NavDropdown.Item>
                            </Link>

                            <Link
                                href="/Sources/Differences_between_campuses"
                                passHref
                            >
                                <NavDropdown.Item>
                                    Campus Differences
                                </NavDropdown.Item>
                            </Link>


                            <Link href="/Sources/Criticisms" passHref>
                                <NavDropdown.Item>
                                    Criticisms
                                </NavDropdown.Item>
                            </Link>

                            <Link href="/Sources/Interviews" passHref>
                                <NavDropdown.Item>Interviews</NavDropdown.Item>
                            </Link>
                        </NavDropdown>

                        <Link href="/Updates" passHref>
                            <Nav.Link>Updates</Nav.Link>
                        </Link>

                        <Link href="/About" passHref>
                            <Nav.Link>About</Nav.Link>
                        </Link>

                        <Link href="/Contact" passHref>
                            <Nav.Link>Contact</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
