import { Injectable } from '@angular/core';

@Injectable()
export class EcgDataProcessingService {

  constructor() { }
  drawinterval = false;
  ecg_data = [];
  qrs;
  qrs_pm = 0;
  qrs_count = 0;
  count = 0;
  current_data = [];
  diff_arr = [];
  THREASHOLD = 50;
  FREQ = 300; // 150 Hz
  return_ecg_value;

  merge(new_data) {
    for (let i = 0; i < new_data.length; i++) {
      this.current_data.push(new_data[i]);
      console.log('marge');
      console.log(this.current_data);
    }
  }

  calcDiff() {
    let last_non_ziro_diff;
    for (let i = 1; i < this.current_data.length; i++) {

      // var ob = {}; // php code
      const ob: {[k: string]: any} = {}; // Dyanmic object select

      ob.diff = this.current_data[i] - this.current_data[i - 1];
      if (this.diff_arr.length > 0) {
        const last_diff = this.diff_arr[this.diff_arr.length - 1].diff;
        if (last_diff !== 0) {
          last_non_ziro_diff = last_diff;
        }
        // tslint:disable-next-line:no-bitwise
        if (ob.diff === 0 || (last_non_ziro_diff ^ ob.diff) >= 0) {
          ob.direction = 1;
        } else {
          ob.direction = -1;
        }
      }
      this.diff_arr.push(ob);
      console.log(ob);
    }
  }

  checkQRS(probable_QRS) {
    let dirA = 0;
    let dirB = 0;
    let i = 0;
    while (!probable_QRS[i].direction) {
      i++;
    }
    for (; -1 !== probable_QRS[i].direction; i++) {
      dirA += Math.abs(probable_QRS[i].diff);
    }

    for (; i < probable_QRS.length; i++) {
      dirB += Math.abs(probable_QRS[i].diff);
    }

    if (dirA >= this.THREASHOLD && dirB >= this.THREASHOLD) {
      return true;
    }else {
      return false;
    }
  }

  findPeak() {
    let state = 0; // initial state
    let probable_QRS = [];
    for (let i = 1; i < this.diff_arr.length; i++) {

      console.log('FindPeak function C1');

      const prev = this.diff_arr[i - 1];
      const curr = this.diff_arr[i];
      switch (state) {
        case 0:
          if (-1 !== curr.direction && prev.direction !== curr.direction) {

            console.log('FindPeak function C2');

            probable_QRS.push({ diff: curr.diff, direction: curr.direction });
            state = 1;
          }

          break;
        case 1:

          console.log('FindPeak function C3');

          probable_QRS.push({ diff: curr.diff, direction: curr.direction });
          if (-1 === curr.direction) {
            state = 2;
          }
          break;
        case 2:
          if (-1 === curr.direction) {

            console.log('FindPeak function C4');

            const is_QRS = this.checkQRS(probable_QRS);
            if (!is_QRS) {
              while (-1 !== probable_QRS[0].direction) {
                probable_QRS.shift();
              }

              console.log('FindPeak function C5');

              probable_QRS.shift();
              probable_QRS.push({ diff: curr.diff, direction: curr.direction });
            } else {
              probable_QRS = [];
              this.qrs_count++;
              state = 0;
            }

          } else {
            console.log('FindPeak function C6');

            probable_QRS.push({ diff: curr.diff, direction: curr.direction });
          }
          break;
      }
    }

  }


  cutTheArrayToOne() {
    while (this.current_data.length > 1) {
      this.current_data.shift();
    }
    while (this.diff_arr.length > 1) {
      this.diff_arr.shift();
    }
  }



  init(data) {
    this.merge(data);
    this.count = data.length;
    this.calcDiff();
    this.findPeak();
    this.cutTheArrayToOne();

  }
  update(data) {
    console.log('Update Call');
    this.merge(data);
    this.calculate();
    this.count += data.length;
  }
  calculate() {
    this.calcDiff();
    this.findPeak();
    this.cutTheArrayToOne();

  }
  QRS() {
    // this.return_ecg_value = Math.floor(this.qrs_count * this.FREQ / this.count * 60);
    return Math.floor(this.qrs_count * this.FREQ / this.count * 60);
  }


}
