import ready from 'Utils/documentReady.js';

ready(function(){
    // hide / show password
    const showPassBtn = document.querySelectorAll('.js-show-icon');

    showPassBtn.forEach(function (trigger) {
        trigger.addEventListener('click', () => {
        const passwordInput = trigger.previousElementSibling;
        passwordInput.getAttribute('type') === 'password' ? passwordInput.setAttribute('type', 'text') : passwordInput.setAttribute('type', 'password');
        trigger.querySelector(".show-icon--line").classList.toggle("visually-hidden");
        });
    })


    //mask tel
    let inputTel = document.querySelectorAll('.input--tel');
    inputTel.forEach(function (input) {
        let keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            let pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            let matrix = "+7 (___) ___-__-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                newValue = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
                });
            i = newValue.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                newValue = newValue.slice(0, i);
            }
            let reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}";
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = newValue;
            if (event.type == "blur" && this.value.length < 5) this.value = "";
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false);
    });


});
