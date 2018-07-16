;
  (function () {

    // let checkbox = document.querySelector('[name=completed]')
    // console.log(checkbox);
    // checkbox.value = 'off';

    function getFormData(selector) {
      let data = {};
      let form = document.querySelector(selector)
      let list = form.querySelectorAll('[name]')
      list.forEach(element => {
        switch (element.nodeName) {
          case "INPUT":
            switch (element.type) {
              case "checkbox":
              case "radio":
                data[element.name] = element.checked;
                break;
              default:
                data[element.name] = element.value;
                break;
            }
            break;
          default:
            data[element.name] = element.value;
            break;
        }
      });
      return data;
    }

    let row = getFormData('#todo-form');
    console.log(row);

 
  })();