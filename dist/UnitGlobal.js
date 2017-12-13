//https://en.wikipedia.org/wiki/International_System_of_Units

class UnitGlobal {

    constructor(type, value = 0, symbol)
    {
        let unit
        
        if(type == 'mass')
        {
            unit = new UnitMass(value, symbol)
        }
        else
        {
            throw `The unit type ${type} not supported`
        }

        this.unit = unit
    }

    convert(symbol)
    {
        return this.unit.convert(symbol)
    }

    toString(fixed) 
    {
        let value = this.unit.unit.value
        
        if(fixed)
        {
            value = this.unit.unit.value.toFixed(fixed)
        }
        
        return String(`${value}${this.unit.unit.symbol}`)
    }
}

class UnitMass {
    
    constructor(value, symbol)
    {
        const allSymbols = {
            base:{
                symbol: 'kg'
            },
            lb:{
                rate: 2.20462
            },
            kg:{
                rate: 1
            },
            g:{
                rate: 1000
            }
        }

        this.allSymbols = allSymbols

        symbol = symbol || this.allSymbols.base.symbol

        if(this.allSymbols[symbol])
        {
            this.unit = {
                value: value,
                symbol: symbol 
            }
        }
        else
        {
            throw `In unit type mass, symbol ${symbol} not supported`
        }
    }

    convert(symbol)
    {
        let toSymbol = this.allSymbols[symbol]
        if(toSymbol)
        {
            let value = this.unit.value + 0 

            if(this.unit.symbol != symbol && value != 0)
            {
                let base = this.allSymbols[this.unit.symbol]
                value = value / base.rate

                if(this.allSymbols.base.symbol != symbol)
                {
                    value = value * toSymbol.rate
                }
            }

            return new UnitGlobal('mass', value, symbol)
        }
        else
        {
            throw `In unit type mass, symbol ${symbol} not supported`
        }
    }
}

module.exports = UnitGlobal