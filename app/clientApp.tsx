"use client";
import React, { useState, useEffect } from 'react';

export default function ClientApp({ children } : any) {
  useEffect(() => {
    scrolling();
  });

  return children;
}


export function scrolling(){
    const header = document.querySelector('header');
    const scrollOffset = 200;
    let prevScrollpos = window.scrollY;
    if(!header) return;
    window.addEventListener('scroll', () => {
        /* check if the scroll offset is passed */
        if (window.scrollY > scrollOffset) {
            /* get the new page position after scrolling */
            let currentScrollPos = window.scrollY;
            /* check the new page position with the old position */
            if (prevScrollpos > currentScrollPos) {
                /* if scrolling UP, show the sticky element */
                header.style.top = '0';
            } else {
                /* if scrolling DOWN, hide the sticky element */
                header.style.top = '-100px';
            }
            /* set the page position, so it can be checked the next time */
            prevScrollpos = currentScrollPos; 
        }
        
    });
    }