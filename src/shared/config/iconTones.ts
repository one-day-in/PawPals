export const ICON_TONES = {
  default: 'default',
  accent: 'accent',
  success: 'success',
  warning: 'warning',
  muted: 'muted',
  danger: 'danger',
} as const;

export type IconToneKey = keyof typeof ICON_TONES;
