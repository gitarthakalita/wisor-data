import React from 'react';

import './custom-link.scss';

const CustomLink = ({children,  ...otherProps}) => (
    <div className="custom-link-container" {...otherProps}>
        {children}
    </div>
);

export default CustomLink;