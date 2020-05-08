import React from 'react';

import './custom-button.scss';

const CustomButton = ({children, variantOne, variantTwo, variantWhite, ...otherProps}) => {
    return(
        <button className={` 
                ${variantOne ? 'variant-one' : ''}
                ${variantTwo ? 'variant-two' : ''}
                ${variantWhite ? 'variant-white' : ''}
        
                custom-button`} {...otherProps} >
            {children}
        </button>
    )
}

export default CustomButton;