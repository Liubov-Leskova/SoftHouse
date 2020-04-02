export const sortHeroes = (list) => list.reduce((obj, cur) => {
        switch (cur.primary_attr) {
            case 'str': {
                obj.strength.push(cur);
                return obj
            }
            case 'int' : {
                obj.intelligence.push(cur);
                return obj
            }
            case 'agi' : {
                obj.agility.push(cur);
                return obj
            }
            default: {
                return obj
            }
        }
    },  {
        strength: [],
        intelligence: [],
        agility: [],
    });

