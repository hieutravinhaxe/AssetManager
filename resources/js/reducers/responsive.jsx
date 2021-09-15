import { responsiveConstants } from '../constants'

const { TOGGLE_VISIBLE_MOBILE, TOGGLE_MENU_MOBILE } = responsiveConstants

const initialState = {
  isTabletPlatform: false, // <= 992
  isMobilePlatform: false, // < 576
  isSmallLaptop: false, // < 1200
  isMenuOpen: false,
}

const responsive = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_VISIBLE_MOBILE:
      return {
        ...state,
        isMobilePlatform: action.payload.isMobilePlatform,
        isTabletPlatform: action.payload.isTabletPlatform,
        isSmallLaptop: action.payload.isSmallLaptop,
      }
    case TOGGLE_MENU_MOBILE:
      return {
        ...state,
        isMenuOpen: action.payload.isMenuOpen,
      }
    default:
      return state
  }
}

export default responsive
