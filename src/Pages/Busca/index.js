import React, { Component } from 'react'
import { getPokemon, getTypes, getLocation } from '../../api/api';
import Select from '../../Components/Select';
import { options } from './options';

class Busca extends Component {
    constructor(){
        super();
        this.state = {
            pokemon: "",
            type: "",
            location: "",
        }
    }

    async componentDidMount() {
        const nomePoke = await getPokemon(25)

        // const types = await getTypes(type)
        // console.log(types)

        const location = await getLocation(1)
    }

    async componentDidUpdate(){
        const {type} = this.state
        const types = await getTypes(type)
        console.log(types)
    }

    handleOnChange = (e) => {
        this.setState({ type: e.target.value})
    }
    

    render() {
        
        return (
            <div>
                <Select
                    onChange={this.handleOnChange}
                    placeholder="informe o tipo"
                    options={options.types}
                    value={this.type}
                />

                <Select
                    // onChange={onChange}
                    placeholder="informe a localidade"
                    options={options.location}
                    value={'banana'}
                />
            </div >
        )
    }
}

export default Busca;