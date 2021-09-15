import { responsiveConstants } from '../constants'
const { TOGGLE_VISIBLE_MOBILE, TOGGLE_MENU_MOBILE } = responsiveConstants

export const toggleVisibleMobile = (
  isTabletPlatform,
  isMobilePlatform,
  isSmallLaptop
) => ({
  type: TOGGLE_VISIBLE_MOBILE,
  payload: {
    isTabletPlatform: isTabletPlatform,
    isMobilePlatform: isMobilePlatform,
    isSmallLaptop: isSmallLaptop,
  },
})

export const toggleVisibleMenu = (value) => ({
  type: TOGGLE_MENU_MOBILE,
  payload: {
    isMenuOpen: value,
  },
})
