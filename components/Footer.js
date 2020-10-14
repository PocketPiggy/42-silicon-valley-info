import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                        href="https://twitter.com/Pocket_Piggy"
                        target="blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={['fab', 'twitter-square']}
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
                            icon={['fab', 'github-square']}
                            className="footer-icon"
                        />
                    </a>
                </span>

                <span>
                    <a
                        href="https://github.com/PocketPiggy/42-Silicon-Valley-Information-Trove"
                        target="blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            icon='code-branch'
                            className="footer-icon"
                        />
                    </a>
                </span>

            </span>
        </div>
    );
}
