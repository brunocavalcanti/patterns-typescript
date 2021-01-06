/* eslint-disable @typescript-eslint/interface-name-prefix */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { CardTypes } from "./CardTypes";

export default interface ICard {
  rate: number;
  type: CardTypes;
  number: number;
  payment(value: number): string;
}
