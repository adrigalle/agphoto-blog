import React from "react";
import styles from './nav.module.css';

export default function Top() {
    return (
        <a id="back-to-top" href="#top" className={`btn fixed-bottom go-up btn-light btn-lg back-to-top ${ styles.goUp}`} role="button" style={{ width:50, left:'auto'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
            </svg>
        </a>
    )
} 