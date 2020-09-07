import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(props) {
    return (
        <div className="h-16 bg-black flex items-center justify-between">
            <div class="flex items-center flex-shrink-0 text-white mx-8">
                <span class="font-bold text-2xl">CODEGIT</span>
            </div>
            <div class="block md:hidden">
                <button class="flex items-center mx-8 text-white">
                    <svg class="fill-current h-5 w-5"><title>Menu</title><FontAwesomeIcon icon={faBars} /></svg>
                </button>
            </div>
        </div>
    );
}