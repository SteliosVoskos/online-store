const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const device = {
  mobileS: `(min-width: ${size.mobileS}) and (max-width: ${size.tablet})`,
  mobileM: `(min-width: ${size.mobileM}) and (max-width: ${size.tablet})`,
  mobileL: `(min-width: ${size.mobileL}) and (max-width: ${size.tablet - 1})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop}) and (max-width: ${size.laptopL - 1})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`
};

