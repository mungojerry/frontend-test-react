/* global describe, it, browser */
const expect = require('chai').expect;


describe('TodoList App', () => {
    it('Should load with the right title', () => {
        browser.url('http://localhost:8080/');
        const actualTitle = browser.getTitle();

        expect(actualTitle).to.eql('Pi-Top Tech Test');
    });



    it('Should allow me to create a Todo', () => {
        const todoText = 'Get better at testing';
        browser.url('http://localhost:8080/');
        browser.element('.todo-input').setValue(todoText);
        browser.click('.todo-submit');
        const actual = browser.element('.todo-text').getText();
        expect(actual).to.equal(todoText);
    });

});
