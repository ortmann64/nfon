import * as config from '../../lib/config';
import { expect, test } from '@jest/globals';

test('sets the config variables', () => {
    expect(config.set({ accessKeyId: '12345', secretAccessKeyId: '67890' })).toBe(undefined);
});

test('gets the config variables', () => {
    expect(config.get().apiAccessKeyId).toBe('12345');
});

test('gets the config variables', () => {
    expect(config.get().apiSecretAccessKeyId).toBe('67890');
});