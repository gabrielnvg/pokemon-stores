const getLastUrlPath = (s) =>
  s.split('/')[
    s.split('/').length - (s.substring(s.length - 1) === '/' ? 2 : 1)
  ];

export default getLastUrlPath;
