import React from 'react';

import './menu-section.css';

import Grid from '@material-ui/core/Grid';

import MenuItem from '../menu-item'

const MenuSection = ({ title, items }) => {

    const sectionItems = items.map(item => {
        return (
            <Grid 
                className="menu-item-wrapper"
                item 
                xs={12} 
                sm={6} 
                md={4} 
                lg={3}
                key={item.id}>
                <MenuItem item={item}/>
            </Grid>
        )
    })

    return (
        <section className="menu-section">
            <h1 className="menu-section-title">{title}</h1>
            <Grid container spacing={3}>
                {sectionItems}
            </Grid>
        </section>
    )
}

export default MenuSection;