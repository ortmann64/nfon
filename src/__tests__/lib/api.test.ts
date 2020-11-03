import { expect, test, jest } from '@jest/globals';
import * as api from '../../lib/api';

// API request mock
jest.mock('../../lib/request', () => ({
    send: jest.fn( (method: 'POST' | 'GET' | 'PUT' | 'DELETE', path: string, data?: any) => {
        return Promise.resolve({statusMessage: 'OK'})
    })
}));

// Version
test('should receive an statusMessage OK', async () => {
    const res = await api.version();
    expect(res.statusMessage).toBe('OK');
});

// POST request
test('should receive an statusMessage OK', async () => {
    const res = await api.POST('/api/testPOST', { data: 123 });
    expect(res.statusMessage).toBe('OK');
});

// GET request
test('should receive an statusMessage OK', async () => {
    const res = await api.GET('/api/testGET');
    expect(res.statusMessage).toBe('OK');
});

// PUT request
test('should receive an statusMessage OK', async () => {
    const res = await api.PUT('/api/testPUT', { data: 123 });
    expect(res.statusMessage).toBe('OK');
});

// DELETE request
test('should receive an statusMessage OK', async () => {
    const res = await api.DELETE('/api/testDELETE');
    expect(res.statusMessage).toBe('OK');
});