import React from 'react';

export default function Footer() {
  return (
    <div className="footer bg-light"> 
      <footer className="text-center p-1">
        Copyright &copy; {new Date().getFullYear()} Oscar Hernandez 
      </footer>
    </div>
  )
}
