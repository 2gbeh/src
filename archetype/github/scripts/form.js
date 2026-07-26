const Form = {};

Form.form = document.createElement("form");
Form.form.classList.add("flex-cc");
Form.form.style.backgroundColor = "var(--input-active)";
Form.form.style.borderRadius = "8px";
Form.form.style.marginTop = "32px";
Form.form.style.padding = "4px 4px";
Form.form.style.width = "400px";
Form.form.style.height = "48px";
Form.form.style.position = "relative";

Form.input = document.createElement("input");
Form.input.value = "northwindai.org/teach-me";
Form.input.style.backgroundColor = "transparent";
Form.input.style.padding = "0 24px";
Form.input.style.width = "100%";
Form.input.style.fontSize = "18px";
Form.input.style.fontWeight = "600";

Form.button = document.createElement("button");
Form.button.style.backgroundColor = "var(--primary)";
Form.button.style.color = "var(--white)";
Form.button.style.borderColor = "var(--primary);";
Form.button.style.borderRadius = "8px";
Form.button.style.padding = "0 24px";
Form.button.style.height = "40px";
Form.button.style.fontSize = "16px";
Form.button.style.fontWeight = "600";
Form.button.style.letterSpacing = "0.5px";
Form.button.style.cursor = "pointer";
Form.button.style.position = "absolute";
Form.button.style.right = "4px";
Form.button.name = "q";
Form.button.value = Context.index ? 0 : 1;
Form.button.textContent = "Enroll Now";

Form.form.append(Form.input, Form.button);

Hero.append(Form.form);
