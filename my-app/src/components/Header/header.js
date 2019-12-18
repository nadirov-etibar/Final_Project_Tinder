import React, {Component} from 'react';
import "./css/style.scss"

class Header extends Component {
    render() {
        return (
                <header >
                    <nav className={"header"}>
                        <svg className="Sq(28px) Fill($c-dark-gray) header__account header__active" viewBox="0 0 24 24" width="24px" height="24px"
                             focusable="false" aria-hidden="true" role="presentation">
                            <g stroke="none" stroke-width="1">
                                <path className=""
                                      d="M16.085 13.026c1.285-.975 2.088-2.625 2.088-5.55 0-3-2.65-5.476-5.861-5.476C9.1 2 6.45 4.4 6.45 7.475c0 3 .803 4.726 2.168 5.7-2.73 1.576-5.38 4.576-4.416 6.076 2.007 3.525 15.095 3.75 16.7.15.643-1.725-2.006-4.65-4.817-6.375"></path>
                            </g>
                        </svg>
                        <svg className="flame Sq(24px) header__main-page" viewBox="0 0 24 24" width="24px" height="24px" focusable="false"
                             aria-hidden="true" role="presentation">
                            <path
                                d="M8.21 10.08c-.02 0-.04 0-.06-.02-.67-.9-.84-2.44-.89-3.03 0-.11-.13-.18-.23-.12C4.93 8.08 3 10.86 3 13.54 3 18.14 6.2 22 11.7 22c5.15 0 8.7-3.98 8.7-8.46 0-5.87-4.2-9.77-7.93-11.53a.13.13 0 0 0-.19.14c.48 3.16-.18 6.6-4.07 7.93z"
                                fill="#dadfe6" fill-rule="nonzero"></path>
                        </svg>
                        <svg className="Sq(28px) Fill($c-dark-gray) header__message" viewBox="0 0 24 24" width="24px" height="24px"
                             focusable="false" aria-hidden="true" role="presentation">
                            <path
                                d="M11.612 16.143c0-2.821 2.627-5.213 5.97-5.213.776 0 1.552.184 2.269.43 0-4.048-4-7.36-8.836-7.36C6.06 4 2 7.434 2 11.543c0 2.637 1.672 5.09 4.18 6.317v2.76c0 .307.238.49.596.307l3.582-1.84h.896c.418 0 .836 0 1.194-.123-.597-.859-.836-1.84-.836-2.821zm5.97-3.68c-2.507 0-4.537 1.595-4.537 3.68s2.03 3.802 4.477 3.802h.299l.597.246.955.613c.299 0 .597 0 .597-.368v-1.104c1.194-.613 2.03-1.84 2.03-3.189 0-2.085-1.97-3.68-4.478-3.68h.06z"></path>
                        </svg>
                    </nav>
                </header>
        );


    }
}

export default Header;