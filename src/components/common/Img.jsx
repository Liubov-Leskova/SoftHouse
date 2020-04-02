import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import defaultIcon from '../../assets/images/defaultIcon.png';
import {path} from '../../constants';

const handleError = (e) => {
    e.target.src = defaultIcon
}
const Img = ({src, alt, className}) => {
    const [isLoaded, setLoaded] = useState(false);
    const handleLoad = () => setLoaded(true);
    return (
        <img className={classnames(className, 'img', {'img_loaded': isLoaded})} src={path + src} alt={alt} title={alt}
             onError={handleError} onLoad={handleLoad}/>
    )
}
Img.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
}
export default Img;
