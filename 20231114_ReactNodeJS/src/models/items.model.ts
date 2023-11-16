export type ItemId = `${string}-${string}-${string}-${string}-${string}`;
export interface ItemsInterface{
  id:ItemId, /*string,*/
  timestamp: number,
  text: string,
}
