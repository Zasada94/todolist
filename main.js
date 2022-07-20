window.addEventListener("load", () => {
	const form = document.getElementById("newTaskForm");
	const input = document.getElementById("newTaskInput");
	const elementsList = document.getElementById("tasks");

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const titleTask = input.value;
		if (!titleTask) {
			alert("please fill the task");
			return;
		}
		const taskElement = document.createElement("div");
		taskElement.classList.add("task");

		const taskContentElement = document.createElement("div");
		taskContentElement.classList.add("content");

		taskElement.appendChild(taskContentElement);

		const taskInputElement = document.createElement("input");
		taskInputElement.classList.add("text");
		taskInputElement.type = "text";
		taskInputElement.value = titleTask;
		taskInputElement.setAttribute("readonly", "readonly");

		taskContentElement.appendChild(taskInputElement);

		const taskActionsElement = document.createElement("div");
		taskActionsElement.classList.add("actions");

		const taskEditElement = document.createElement("button");
		taskEditElement.classList.add("edit");
		taskEditElement.innerText = "Edit";

		const taskDeleteElement = document.createElement("button");
		taskDeleteElement.classList.add("delete");
		taskDeleteElement.innerText = "Delete";

		taskActionsElement.appendChild(taskEditElement);
		taskActionsElement.appendChild(taskDeleteElement);

		taskElement.appendChild(taskActionsElement);

		elementsList.appendChild(taskElement);
		input.value = "";

		taskEditElement.addEventListener("click", () => {
			if (taskEditElement.innerText.toLowerCase() == "edit") {
				taskInputElement.removeAttribute("readonly");
				taskInputElement.focus();
				taskEditElement.innerText = "Save";
			} else {
				taskInputElement.setAttribute("readonly", "readonly");
				taskEditElement.innerText = "edit";
			}
		});

        taskDeleteElement.addEventListener("click", () => {
			elementsList.removeChild(taskElement)
		});
	});
});
