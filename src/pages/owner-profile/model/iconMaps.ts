import type { AllowedIconName } from '@/shared/icons/allowedIcons';
import type { IconToneKey } from '@/shared/config/iconTones';

interface ScheduleIconSpec {
  icon: AllowedIconName;
  iconTone: IconToneKey;
  bubbleClass: 'is-blue' | 'is-amber' | 'is-green' | 'is-violet' | 'is-pink';
}

export const OWNER_SCHEDULE_ICON_MAP: Record<'walk' | 'sitting' | 'visit' | 'bird' | 'grooming', ScheduleIconSpec> = {
  walk: { icon: 'footprints', iconTone: 'default', bubbleClass: 'is-blue' },
  sitting: { icon: 'house', iconTone: 'default', bubbleClass: 'is-amber' },
  visit: { icon: 'heart', iconTone: 'default', bubbleClass: 'is-green' },
  bird: { icon: 'bird', iconTone: 'default', bubbleClass: 'is-violet' },
  grooming: { icon: 'scissors', iconTone: 'default', bubbleClass: 'is-pink' },
};

export const OWNER_PAST_STATUS_ICON = {
  icon: 'circle-check' as AllowedIconName,
  tone: 'success' as IconToneKey,
};
