import _ from "underscore";
import colors from 'colors';

class Calculator {
    sum(...args) {


        var a = {
            name: 'Israel',
            addresses: [ 
                {
                    name: 'home'
                },
                {
                    name: 'new work in Spain :D'
                }
            ]
        }

        console.log(JSON.stringify(a, null, 4).blue);

        return _.reduce(args, (p, c) => p + c, 0);
    }
}

export default new Calculator();