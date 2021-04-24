export enum OutrageTypes {
  NONE = 'None',
  PLANNED = 'Planned Outrage',
  UNPLANNED = 'Unplanned Outrage',
}

export interface ContentTypesOpsStatus {
  outrageEnd: Date;
  outrageStart: Date;
  outrageType: OutrageTypes;
}
