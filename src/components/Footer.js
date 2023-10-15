import React from 'react';

export default function Footer({ font }) {
  return (
    <footer className={`${font.className} container text-center`}>
      &copy; <a href="https://www.linkedin.com/in/an-yao-pao-6992a1217" target="_blank" rel="noopener noreferrer">Annie Pao</a>, <a href="https://bellalee.com" target="_blank" rel="noopener noreferrer">Bella Lee</a>, <a href="https://minorenji.github.io/" target="_blank" rel="noopener noreferrer">Sean Lim</a>, and <a href="https://www.linkedin.com/in/stephanie-chou-4066a51b9/" target="_blank" rel="noopener noreferrer">Stephanie Chou</a> for Dubhacks 2023
    </footer>
  )
}