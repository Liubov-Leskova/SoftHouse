import './MainPage.scss';
import React, {useState, useEffect} from 'react';
import API from '../api'
import Loader from '../components/common/Loader';
import HeroesList from '../components/HeroesList';
import Search from '../components/Search';
import {sortHeroes} from '../utils';

const defaultState = {
    strength: [],
    intelligence: [],
    agility: [],
};

const MainPage = () => {
    const [list, setList] = useState(defaultState);
    const [isLoading, setLoading] = useState(true);
    const [name, setName] = useState('');
    useEffect(() => {
        setLoading(true);
        API.getHeroes()
            .then(res => {
                setLoading(false);
                setList(sortHeroes(res))
            })
    },[]);
    const onSubmit = name => setName(name);
    const {strength, intelligence, agility} = list;
    return (
        <>
            <Search onSubmit={onSubmit}/>
                <section className='container'>
            {
                isLoading ? <Loader isLoading={isLoading}/> :
                    <div className='row row_justify_between'>
                        <HeroesList list={strength} title={'strength'} name={name}/>
                        <HeroesList list={intelligence} title={'intelligence'} name={name}/>
                        <HeroesList list={agility} title={'agility'} name={name}/>
                    </div>
            }
                </section>
        </>
    )
}

export default MainPage;
