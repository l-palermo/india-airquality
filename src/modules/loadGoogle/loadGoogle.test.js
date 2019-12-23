import loadGoogle from './loadGoogle';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

describe('loadGoogle', () => {
  it('load the google maps object', () => {
    const dom = new JSDOM('<!DOCTYPE html>');
    const doc = dom.window.document;
    expect(loadGoogle(doc, 'http://localhost:3000/')).resolves.toBe('');
  });
});
