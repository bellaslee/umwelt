import React from 'react';

export default function Footer({ font }) {
  return (
    <footer className={`${font.className} container text-center`}>
      &copy; Annie Pao, Bella Lee, Sean Lim, and Stephanie Chou for Dubhacks 2023
    </footer>
  )
}