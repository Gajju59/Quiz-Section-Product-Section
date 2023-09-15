document.addEventListener("DOMContentLoaded", function () {
    const blocks = document.querySelectorAll(".block");

    blocks.forEach(function (block) {
        block.addEventListener("click", function () {
            const radioId = this.getAttribute("data-radio-id");
            const radioInput = document.getElementById(radioId);

            if (radioInput) {
                radioInput.checked = true;
            }
        });
    });
});
