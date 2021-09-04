import React, {fragment} from 'react';
import image from '../../assets/meals.jpg';
import classes from './header.module.css';
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {

      return (
          <fragment>
              <header className={classes.header}>
                  <h1>
                     React Meals
                  </h1>
                  < HeaderCartButton />

              </header>
            <div className={classes['main-image']}>
                <img src={image} alt="Image not displayed">
                </img>
            </div>

          </fragment>
      )

}

export default Header;