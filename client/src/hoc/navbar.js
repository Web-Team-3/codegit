import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(props) {
    return (
        <div className="h-20 bg-black flex items-center justify-between">
            <div className="flex items-center flex-shrink-0 text-white mx-8">
                <span className="font-bold text-3xl">CODEGIT</span>
            </div>
            <div className="lg:hidden">
                <button className="flex items-center mx-8 text-white">
                    <svg className="fill-current h-5 w-5"><title>Menu</title><FontAwesomeIcon icon={faBars}/></svg>
                </button>
            </div>
        </div>
    );
}