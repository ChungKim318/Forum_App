import AppConfigs from 'configs/env'

const BASE_URL = AppConfigs.API_URL

export const END_POINT = {
  //AUTH
  AUTH: {
    SIGN_IN: `${BASE_URL}/auth/authenticate`,
    SIGN_UP: `${BASE_URL}/auth/register`,
    REFRESH_TOKEN: `${BASE_URL}/auth/refresh-token`,
  },
}
