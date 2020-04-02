import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import * as classnames from 'classnames';
import Img from './common/Img';

const Hero = ({hero, filteredName}) => {
    const history = useHistory();
    const handleClick = () => history.push(`/${hero.name}`, hero);
    const isActive = filteredName && hero.name.toLowerCase().indexOf(filteredName) !== -1 ? true : false;
    return(
        <div className={classnames('hero', {'hero_active': isActive})} onClick={handleClick}>
            <Img src={hero.icon} alt={hero.name} className='img_responsive'/>
            <span className='hero__name'>{hero.localized_name}</span>
        </div>
    )
}

Hero.propTypes = {
    hero: PropTypes.object,
    filteredName: PropTypes.string,
}
export default Hero;
