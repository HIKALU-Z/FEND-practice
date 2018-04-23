(function() {
  class ToolTip {
    constructor(tipTrigger) {
      this.tipTrigger = tipTrigger;
      this.data = tipTrigger.dataset.tip;
      this.init();
      this.bindEvent();
    }
    init() {
      console.log(this.data);
    }
    show(){
      this.tipTrigger.style.padding = '20px';
    }
    hide(){
      this.tipTrigger.style.padding = '0';
    }
    bindEvent() {
      let __self__ = this;
      this.tipTrigger.addEventListener('mouseenter', e => __self__.show());
      this.tipTrigger.addEventListener('mouseleave', e => __self__.hide());
    }
  }

  let tipTriggers = document.querySelectorAll('.tip-trigger');
  tipTriggers.forEach(tipTrigger => new ToolTip(tipTrigger));
})();
