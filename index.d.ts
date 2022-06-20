declare module "@edgeros/solar2lunar" {
  import calendar = require("solar2lunar");
  export = calendar;
}
declare module 'solar2lunar' {
  interface Calendar {
    lYear: number;
    lMonth: number;
    lDay: number;
    Animal: string;
    IMonthCn: string;
    IDayCn: string;
    cYear: number;
    cMonth: number;
    cDay: number;
    gzYear: string;
    gzMonth: string;
    gzDay: string;
    isToday: boolean;
    isLeap: boolean;
    nWeek: number;
    ncWeek: string;
    isTerm: boolean;
    Term: string;
    astro: string;
  }
  export function solar2lunar(): Calendar;
  export function solar2lunar(y: number, m: number, d: number): Calendar;
  export function lunar2solar(): Calendar;
  export function lunar2solar(y: number, m: number, d: number): Calendar;
}
