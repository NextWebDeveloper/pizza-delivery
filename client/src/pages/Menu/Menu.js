import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import MenuSection from '../../components/menu-section'

const Menu = ({menu}) => {

    const fullMenu = Object.entries(menu).map(x => {
        return (
            <MenuSection 
                title={x[0]} 
                items={x[1]}
                key={x[0]}></MenuSection>
        )
    })

    return (
        <div>
            {fullMenu}
        </div>
    )
}

const mapStateToProps = state => {
    return { 
        menu: state.menu
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            
        },
        dispatch
    )

export default connect(mapStateToProps, mapDispatchToProps)(Menu);