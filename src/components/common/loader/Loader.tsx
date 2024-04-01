import React from 'react';
import { BeatLoader } from 'react-spinners';
import './Loader.css';

const Loader: React.FC = () => {
    return (
        <div className="loader">
            <BeatLoader color="#fff" size={15} />
        </div>
    );
}

export default Loader;
