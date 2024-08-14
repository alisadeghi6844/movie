import React from 'react';

const SecondaryLayout: React.FC = ({ children }) => {
    return (
        <div>
            <main>{children}</main>
        </div>
    );
};

export default SecondaryLayout;
