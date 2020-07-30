import React from 'react';
import Button from 'components/ui/button';

const Header: React.SFC = () => {
  return (
    <header className="header" id="home">
      <div className="container">
        <section className="header-content">
          <h1 className="title-header">
            Mike_ <br />
            Front-End <br />
            Developer
          </h1>
          <p className="description-header">Code is my life!</p>
          <div className="social"></div>
          <br />
          <Button
            hrefLink="#portfolio"
            type="large"
            color="orange"
            text="proyectos"
          />
        </section>
        <span className="text-water">DEVELOPER</span>{/** Marca de agua*/}
      </div>
    </header>
  )
}

export default Header;