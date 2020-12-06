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
                                href="/preparation/before_the_piscine"
                                passHref
                            >
                                <NavDropdown.Item>
                                    Before the Piscine
                                </NavDropdown.Item>
                            </Link>

                            <Link href="/preparation/cli_and_zsh" passHref>
                                <NavDropdown.Item>CLI & Zsh</NavDropdown.Item>
                            </Link>

                            <Link href="/preparation/text_editor" passHref>
                                <NavDropdown.Item>Text Editor</NavDropdown.Item>
                            </Link>

                            <Link href="/preparation/git" passHref>
                                <NavDropdown.Item>Git</NavDropdown.Item>
                            </Link>

                            <Link
                                href="/preparation/the_c_programming_language"
                                passHref
                            >
                                <NavDropdown.Item>
                                    The C language
                                </NavDropdown.Item>
                            </Link>

                            <Link
                                href="/preparation/putting_it_all_together"
                                passHref
                            >
                                <NavDropdown.Item>
                                    Putting it all together
                                </NavDropdown.Item>
                            </Link>
                        </NavDropdown>

                        <NavDropdown title="Sources">
                            <Link href="/sources" passHref>
                                <NavDropdown.Item>All Sources</NavDropdown.Item>
                            </Link>

                            <Link href="/sources/blogs_and_reviews" passHref>
                                <NavDropdown.Item>
                                    Blogs & Reviews
                                </NavDropdown.Item>
                            </Link>

                            <Link href="/sources/orms" passHref>
                                <NavDropdown.Item>Dorms</NavDropdown.Item>
                            </Link>

                            <Link href="/sources/townhalls" passHref>
                                <NavDropdown.Item>Town Halls</NavDropdown.Item>
                            </Link>

                            <Link href="/sources/github_repos" passHref>
                                <NavDropdown.Item>
                                    Github Repos
                                </NavDropdown.Item>
                            </Link>

                            <Link
                                href="/sources/differences_between_campuses"
                                passHref
                            >
                                <NavDropdown.Item>
                                    Campus Differences
                                </NavDropdown.Item>
                            </Link>


                            <Link href="/sources/interviews" passHref>
                                <NavDropdown.Item>Interviews</NavDropdown.Item>
                            </Link>
                        </NavDropdown>

                        <Link href="/updates" passHref>
                            <Nav.Link>Updates</Nav.Link>
                        </Link>

                        <Link href="/about" passHref>
                            <Nav.Link>About</Nav.Link>
                        </Link>

                        <Link href="/contact" passHref>
                            <Nav.Link>Contact</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
