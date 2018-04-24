(function () {
  /**
   *
   */
  class ToolTipTrigger {

    constructor(tipTrigger) {
      this.tipTrigger = tipTrigger;
      this.tipData = tipTrigger.dataset;
      this.init();
      this.bindEvent();
    }

    init() {
      this.tip = document.createElement('div')
      this.tip.classList.add('tip')
      this.tip.hidden = true;
      this.tip.direction = this.tipData.tipDirection;
      this.tip.innerText = this.tipData.tip;
      document.body.appendChild(this.tip);
      console.log(this.tipData);
    }

    bindEvent() {
      let __self__ = this;
      this.tipTrigger.addEventListener('mouseenter', e => __self__.show());
      this.tipTrigger.addEventListener('mouseleave', e => __self__.hide());
    }

    show() {
      this.tip.hidden = false;
      this.setDirection();
      this.setLocation();
    }

    setDirection() {

    }

    setLocation() {
      this.tipTrigger.position = this.tipTrigger.getBoundingClientRect(); // 获取元素的位置信息
      this.tip.position = this.tip.getBoundingClientRect(); // 获取元素的位置信息
      this.tip.style.top = this.tipTrigger.position.top-this.tip.offsetHeight-2
      /* tip.style.top = position.top - tip.offsetHeight - 2; // offsetHeight可见区域高度
      tip.style.left = position.left; */
    }

    getInfo() {
      let trigger_pos = this.trigger.getBoundingClientRect();
      let tip_pos = this.tip.getBoundingClientRect();
      let window_h = document.body.clientHeight;
      let window_w = document.body.clientWidth;

      return {
        trigger_pos: trigger_pos,
        tip_pos: tip_pos,
        window_h: window_h,
        window_w: window_w,
        // exceed_top: (trigger_pos.top - tip_pos.height - 5) < 0,
        // exceed_bottom: (trigger_pos.bottom + tip_pos.height + 5) > window_h,
        // exceed_left: (trigger_pos.left - tip_pos.width) < 0,
        // exceed_half_left: (trigger_pos.left - tip_pos.width / 2) < 0,
        // exceed_right: (trigger_pos.right + tip_pos.width) > window_w,
        // exceed_half_right: (trigger_pos.right + tip_pos.width / 2) > window_w
      };
    }

    hide() {
      this.tip.hidden = true;
    }
  }

  let tipTriggers = document.querySelectorAll('.tip-trigger');
  tipTriggers.forEach(tipTrigger => new ToolTipTrigger(tipTrigger));
})();