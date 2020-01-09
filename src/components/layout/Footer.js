import React from 'react';

export default function Footer() {
  return (
    <div className="footer"> 
      <footer className="text-center p-1 bg-light">
        Copyright &copy; {new Date().getFullYear()} Oscar Hernandez 
      </footer>
    </div>
  )
}
