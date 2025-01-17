module.exports = {
  displayName: 'angular-swc',

  transform: {
    '^.+\\.[tj]s$': '@swc/jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/packages/angular/swc',
  preset: '../../../jest.preset.ts',
};
