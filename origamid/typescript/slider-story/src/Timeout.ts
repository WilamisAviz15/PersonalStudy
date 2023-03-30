export default class Timeout {
  id: number;
  handler: TimerHandler;
  start: number;
  timeLeft: number;

  constructor(handler: TimerHandler, timeout: number) {
    this.id = setTimeout(handler, timeout);
    this.handler = handler;
    this.start = Date.now();
    this.timeLeft = timeout;
  }

  clear() {
    clearTimeout(this.id);
  }

  pause() {
    const passed = Date.now() - this.start;
    this.timeLeft = this.timeLeft - passed;
    this.clear();
  }

  continue() {
    this.clear();
    this.id = setTimeout(this.handler, this.timeLeft);
    this.start = Date.now();
  }
}
