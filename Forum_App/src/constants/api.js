import AppConfigs from 'configs/env'

const BASE_URL = AppConfigs.API_URL

export const END_POINT = {
  //AUTH
  AUTH: {
    SIGN_IN: `${BASE_URL}/`,
    SIGN_UP: `${BASE_URL}/`,
  },
}
