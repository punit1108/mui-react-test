export const GENERIC_CARD = {
  width: 'calc(100% - 40px)',
  gap: 2,
  '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
  display: 'flex',
  height: 700,
  overflowY: 'scroll',
}

export enum STATUS {
  LOADING = 'loading',
  LOADED = 'loaded',
  NODATA = 'nodata',
  ERROR = 'error',
}

export const DEFAULT_CONDITIONS = 'AND (platform_type:ALTAVAULT OR platform_type:HCI OR platform_type:E-SERIES OR platform_type:ONTAP OR platform_type:"CLOUD VOLUMES ONTAP" OR platform_type:SOLIDFIRE OR platform_type:STORAGEGRID OR platform_type:OTHERS OR platform_type:ONTAP-EDGE OR platform_type:ONTAP-SELECT OR platform_type:"CLOUD VOLUMES SERVICE" OR platform_type:ASTRA)'