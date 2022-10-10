const expect = require('chai').expect;
const formatFullName = require('../formatFullname');

describe('FormatFullname', () => {
    it('it should return an error if "fullName" arg doesn\'t exist', () => {
        expect(formatFullName('')).to.equal('Error');
    });
    it('should return an error if "fullName" arg is not a string', () => {
        expect(formatFullName(undefined)).to.equal('Error');
        expect(formatFullName(10)).to.equal('Error');
        expect(formatFullName({})).to.equal('Error');
        expect(formatFullName([])).to.equal('Error');
        expect(formatFullName(function () {})).to.equal('Error');
    });
    it('should return an error if "fullName" doesn\'t contain two words', () => {
        expect(formatFullName('John Doe Test')).to.equal('Error');
        expect(formatFullName('John Doe Test Test')).to.equal('Error');
        expect(formatFullName('John')).to.equal('Error');
        expect(formatFullName('Amanda')).to.equal('Error');
    });
});