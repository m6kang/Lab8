/**
 * @jest-environment jsdom
 */
import { TestScheduler } from '@jest/core';
import { pushToHistory } from '../scripts/router.js';

test('settings', ()=>{
    expect(pushToHistory('settings').state.page).toBe('settings');
});

test('entry', ()=>{
    expect(pushToHistory('entry', 2).state.page).toBe('entry2');
});

test('default', ()=>{
    expect(pushToHistory().state.page).toBe();
});