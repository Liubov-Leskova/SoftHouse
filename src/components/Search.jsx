import React, {useState} from 'react';
import PropTypes from 'prop-types';
import IconClose from './common/IconClose';

const Search = ({onSubmit}) => {
    const [name, onChange] = useState('');
    const handleChange = (e) => onChange(e.target.value)
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(name)
    }
    const handleReset = () => {
        onChange('');
        onSubmit('')
    }
    return (
        <section className='container'>
            <div className="row search">
                <form onSubmit={handleSubmit} className='search__form'>
                    <div className='search__form__input'>
                        <input value={name}
                               onChange={handleChange}
                               type="text"
                               placeholder='Type hero name'
                               className='input'
                        />
                        {name && <IconClose onClick={handleReset}/>}
                    </div>
                    <button className='btn btn__default'>Search</button>
                </form>
            </div>
        </section>
    )
}
Search.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default Search
