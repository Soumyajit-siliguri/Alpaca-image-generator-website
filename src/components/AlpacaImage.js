import React from 'react';

const AlpacaImage = ({ imageSrc }) => {
    return (
        <div>
            <img src={imageSrc} alt="Alpaca" style={{ width: '300px', height: '300px' }} />
        </div>
    );
};

export default AlpacaImage;
