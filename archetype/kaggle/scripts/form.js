const Form = {};

Form.form = document.createElement("form");
Form.form.classList.add("flex-cx");

Form.button = document.createElement("button");
Form.button.classList.add("btn-pri");
Form.button.name = "q";
Form.button.value = Context.index ? 0 : 1;
Form.button.textContent = "Enroll Now";

Form.button2 = document.createElement("button");
Form.button2.type = 'button';
Form.button2.classList.add("btn-sec");
Form.button2.textContent = "northindwindai.org/teach-me";

Form.i = document.createElement("i");
Form.i.className = "ti ti-world-upload";
Form.button2.prepend(Form.i);

Form.form.append(Form.button, Form.button2);

Hero.append(Form.form);
