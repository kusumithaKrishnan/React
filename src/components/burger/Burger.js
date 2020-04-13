import React from 'react';
import classes from '../burger/Burger.css';
import BurgerIndredient from './burgerIngredient/BurgerIngredient';

const Burger = (props) => {
    return (
        <div className={classes.Burger}> 
        <BurgerIndredient type = "bread-top" />
        <BurgerIndredient type = "cheese" />
        <BurgerIndredient type = "meat" />
        <BurgerIndredient type = "bread-bottom" />
        </div>
    )

}

export default Burger;