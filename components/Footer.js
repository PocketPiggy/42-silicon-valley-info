import Link from "next/link";
//import {
//Navbar,
//Nav,
//NavDropdown,
//Form,
//FormControl,
//Button,
//} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPortrait, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import {
    faGithubSquare,
    faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <div id="footer">
            <span>
                Made with
                <a
                    href="https://nextjs.org"
                    target="blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/Images/footer/nextjs.svg"
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
                        src="/Images/footer/react.svg"
                        height="30"
                        width="80"
                        alt="React.js Logo"
                    />
                </a>
            </span>

            <span className="links">

                <span>
                    <a
                        href="https://github.com/PocketPiggy/42-Silicon-Valley-Information-Trove"
                        target="blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faCodeBranch}
                            className="footer-icon"
                        />
                    </a>
                </span>


                <span>
                    <a
                        href="https://github.com/PocketPiggy/"
                        target="blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faGithubSquare}
                            className="footer-icon"
                        />
                    </a>
                </span>

                <span>
                    <a
                        href="https://twitter.com/Pocket_Piggy"
                        target="blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faTwitterSquare}
                            className="footer-icon"
                        />
                    </a>
                </span>

            </span>
        </div>
    );
}
