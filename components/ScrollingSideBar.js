import React from "react";
import {
    Link,
    DirectLink,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller,
} from "react-scroll";

export default function ScrollingSideBar(props) {
    //console.log(Object.values(props));
    let ok = Object.values(props);

    const showItems = () => {
        //console.log(okfuckyou)
        console.log(props);
        console.log(ok);
        return (
            <div>
                <ul className="sidebar-items">
                    <li className="sidebar-item">
                        <Link
                            activeClass="active"
                            className="block2"
                            to="block1"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >Block 1</Link>
                    </li>
                    <li className="sidebar-item">
                        <Link
                            activeClass="active"
                            className="block2"
                            to="block2"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >Block 2</Link>
                    </li>
                    <li className="sidebar-item">
                        <Link
                            activeClass="active"
                            className="block3"
                            to="block3"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >Block 3</Link>
                    </li>
                    <li className="sidebar-item">
                        <Link
                            activeClass="active"
                            className="block4"
                            to="block4"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >Block 4</Link>
                    </li>
                    <li className="sidebar-item">
                        <Link
                            activeClass="active"
                            className="block5"
                            to="block5"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >Block 5</Link>
                    </li>
                </ul>
            </div>
        );
    };

    return <div id="scrolling-sidebar">{showItems(props.data)}</div>;
}
