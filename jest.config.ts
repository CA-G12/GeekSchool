import { Config } from 'jest';

const config: Config = {
  preset: 'ts-node',
  testEnvironment: 'node',
  transform: { '^.+\\.ts?$': 'ts-jest' },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};

export default config;
