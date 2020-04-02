import './HeroPage.scss'
import React from 'react';
import {useLocation} from 'react-router-dom';
import Img from '../components/common/Img';

const fields = [
    {
        label: 'Base health',
        key: 'base_health',
    },
    {
        label: 'Base health regen',
        key: 'base_health',
    },
    {
        label: 'Base mana regen',
        key: 'base_mana_regen',
    },
    {
        label: 'Base attack',
        key: ['base_attack_min', 'base_attack_max'],
    },
    {
        label: 'Base str',
        key: 'base_str',
    },
    {
        label: 'Base int',
        key: 'base_int',
    },
    {
        label: 'Base agi',
        key: 'base_agi',
    },
    {
        label: 'Move speed',
        key: 'move_speed',
    },
];
const HeroPage = () => {
    const {state} = useLocation();
    return (
        <div className='container'>
            <div className="row">
                <div className='hero-page__image'>
                    <Img alt={state.name} src={state.img} className={'img_responsive'}/>
                </div>
            </div>
            <div className="row hero-page__roles">
                <div className='hero-page__name'>{state.name}</div>
                <div className='hero-page__attr'>
                    <span className='italic'>Attack types:</span> {state.attack_type}
                </div>
                <div className='hero-page__attr'>
                    <span className='italic'>Roles:</span> {state.roles.join(', ')}
                </div>
            </div>
            <div className="row">
                <table className='hero-page__table'>
                    <tbody>
                    {
                        fields.map(({key, label}, i) => {
                                return label === 'Base attack' ?
                                    <tr key={i}>
                                        <td>{label}:</td>
                                        <td>{state[key[0]]} - {state[key[1]]}</td>
                                    </tr>
                                    :
                                    <tr key={i}>
                                        <td>{label}:</td>
                                        <td>{state[key]}</td>
                                    </tr>
                            }
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HeroPage;
