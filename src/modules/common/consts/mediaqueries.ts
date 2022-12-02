export const size = {
  mobile: '424px',
  tabletMin: '425px',
  tabletMax: '767px',
  desktopMin: '768px',
  desktopMid: '1280px',
  desktopMax: '2560px'
};

export const device = {
  mobile: `@media screen and (max-width: ${size.mobile})`,
  tablet: `@media screen and (min-width: ${size.tabletMin})`,
  tabletOnly: `@media screen and (min-width: ${size.tabletMin}) and (max-width: ${size.tabletMax})`,
  desktop: `@media screen and (min-width: ${size.desktopMin}) and (max-width: ${size.desktopMax})`,
  desktopMid: `@media screen and (min-width: ${size.desktopMid}) and (max-width: ${size.desktopMax})`,
  notDesktop: `@media screen and (max-width: ${size.tabletMax})`
};
