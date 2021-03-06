module.exports = {
  docs: {
    'Ichnion': [
      'overview', 'about', 'quickstart', 'join',
    ],
    'User Guide': [
      'user/index', 'user/install',
      {
        type: 'category',
        label: 'Get your data',
        items: ['user/takeout/google', 'user/takeout/facebook', 'user/takeout/twitter', 'user/takeout/other']
      },
      'user/excavate',
      {
        type: 'category',
        label: 'Visualization',
        items: ['user/visualize/jupyter', 'user/visualize/other']
      },
    ],
    'Developers': [
      'developer/index', 'developer/contribute', 'developer/markdown',
    ],
  },
};
