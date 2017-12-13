const expect = require('chai').expect
const UnitGlobal = require('..')

describe('#UnitGlobalTypeMass', function(){
    it('Se prueba la conversión de 1kg a g y lb', function(){
        const unitMass = new UnitGlobal('mass', 1, 'kg')
        
        const strUnitGramos = unitMass.convert('g').toString()
        expect(strUnitGramos).to.equal("1000g")

        const strUnitLibras = unitMass.convert('lb').toString()
        expect(strUnitLibras).to.equal("2.20462lb")
    })
})