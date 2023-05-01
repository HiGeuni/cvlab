export interface themeStyle {
  color: string;
  btnColor: string;
  btnBgColor: string;
  bgUrl: string;
  isUser99: string;
  isUser77: string;
}

export const AMStyle: themeStyle = {
  color: '#463635',
  btnColor: '#463635',
  btnBgColor: '#53a453',
  bgUrl: '/am.png',
  isUser99: '#463635cc',
  isUser77: '#46363555',
};

export const PMStyle: themeStyle = {
  color: '#ffffff',
  btnColor: '#4C4B4B',
  btnBgColor: '#cee18e',
  bgUrl: '/pm.png',
  isUser99: '#ffffff',
  isUser77: '#cccccc',
};
