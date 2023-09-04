import {images} from 'themes'

export const PAGE_SIZE = 10

export const MAX_LENGTH = {
  EMAIL: 256,
  PASSWORD: 50,
}

export const EVENT_EMITTER = {
  SHOW_SHEET: 'SHOW_SHEET',
  SHOW_MODAL: 'SHOW_MODAL',
  SHOW_PAYMENT_MODAL: 'SHOW_PAYMENT_MODAL',
  SHOW_EMPTY_MODAL: 'SHOW_EMPTY_MODAL',
  SHOW_DISCOUNT_MODAL: 'SHOW_DISCOUNT_MODAL',
}

export const NOTIFICATION_TYPE = {
  NEW_MESSAGE: 'NEW_MESSAGE',
  ID: 'ID',
  CHANNEL: 'CHANNEL',
}

export const MESSAGE_TYPE = {
  VIDEO: 0,
  IMAGE: 1,
  MESSAGE: 2,
  RECORD: 3,
  FILE: 4,
}

export const ATTACHMENT_MESSAGE_TYPE = {
  FILE: 'FILE',
  IMAGE: 'IMAGE',
  RECORD: 'RECORD',
}

export const REACTION_TYPE = {
  LIKE: {
    value: 'LIKE',
    icon: images.LIKE,
  },
  LOVE: {
    value: 'LOVE',
    icon: images.LOVE,
  },
  HAHA: {
    value: 'HAHA',
    icon: images.HAHA,
  },
  HUHU: {
    value: 'HUHU',
    icon: images.HUHU,
  },
  WOW: {
    value: 'WOW',
    icon: images.WOW,
  },
  EW: {
    value: 'EW',
    icon: images.EW,
  },
  ANGRY: {
    value: 'ANGRY',
    icons: images.ANGRY,
  },
}
