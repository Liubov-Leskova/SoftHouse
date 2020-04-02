import React from 'react'
import PropTypes from 'prop-types'
import Hero from './Hero';

const HeroesList = ({list, title, name}) => {
    return (
        <div className='heroes-list'>
            <div className="heroes-list__title">
                {title}
            </div>
            <div className='heroes-list__items'>
                {
                    list.map(hero => (
                        <Hero key={hero.id} hero={hero} filteredName={name}/>
                    ))
                }
            </div>
        </div>
    )
};

HeroesList.propTypes = {
    list: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}
export default HeroesList;
