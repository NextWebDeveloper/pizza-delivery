import React from 'react';

import './delivery-item.css'

import deliveryIcon from '../../assets/food-delivery.svg'

import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

const DeliveryItem = () => {

    return (
        <Grid 
            className="delivery-item"
            container>
            <Grid item xs={12} sm={6}>
                <Box 
                    display="flex"
                    alignItems="center">
                    <img 
                        className="delivery-item__img"
                        src={deliveryIcon}
                        alt="delivery"/>
                    <span className="delivery-item__title">Delivery</span>    
                </Box>
                
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box 
                    height={1}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="center">
                    <div className="delivery-item-price">10$ | 8.9€</div>
                </Box>
            </Grid>
        </Grid>
    )
}

export default DeliveryItem