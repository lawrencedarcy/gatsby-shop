import React from 'react';

function Footer(props) {
  return (
    <div>
      <p>&copy; Slick's Slices {new Date().getFullYear()}</p>
    </div>
  );
}

export default Footer;