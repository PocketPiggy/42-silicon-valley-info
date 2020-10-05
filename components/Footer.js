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
import { faPortrait } from "@fortawesome/free-solid-svg-icons";
import {
    faGithubSquare,
    faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <div>
            <Navbar bg="dark">
                <p>
                    Made with
                    <a
                        href="https://nextjs.org"
                        target="blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/nextjs.svg"
                            height="30"
                            width="80"
                            alt="Next.js Logo"
                        />
                    </a>
                    and
                    <a
                        href="https://reactjs.org"
                        target="blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/react.svg"
                            height="30"
                            width="80"
                            alt="React.js Logo"
                        />
                    </a>
                </p>

                <a
                    href="https://github.com/PocketPiggy/42-Silicon-Valley-Information-Trove"
                    target="blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faGithubSquare} />
                </a>

                <a
                    href="https://matthewmickey.me"
                    target="blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faPortrait} />
                </a>

                <a
                    href="https://twitter.com/Pocket_Piggy"
                    target="blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faTwitterSquare} />
                </a>
            </Navbar>
        </div>
    );
}
