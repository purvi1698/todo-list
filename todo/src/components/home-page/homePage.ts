import { Description } from "./../../../node_modules/jackspeak/dist/commonjs/index.d";
export function home_page() {
  const appContainer = document.getElementById("app");
  if (appContainer) {
    appContainer.textContent = "";
  }

  Object.values(tasks).forEach((taskData) => {
    const taskObj = new Tasks(
      taskData.id,
      taskData.title,
      taskData.description,
      taskData.status,
      taskData.due_date
    );

    taskObj.render_tasks(taskObj);
  });
}

export class Tasks {
  id: number;
  title: string;
  description: string;
  status: string;
  due_date: string;
  constructor(
    id: number,
    title: string,
    description: string,
    status: string,
    due_date: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.due_date = due_date;
  }

  render_tasks(task: Tasks) {
    const parentContainer = document.createElement("div");
    parentContainer.classList.add("todo-card");
    const cardTitle = document.createElement("h6");
    cardTitle.textContent = task.title;

    const cardDescription = document.createElement("p");
    cardDescription.textContent = task.description;

    const toDoBtn = document.createElement("button");
    toDoBtn.textContent = "Complete Task";
    toDoBtn.addEventListener("click", (event) => {
      console.log(`Task "${task.title}" clicked!`, event);
    });
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit Task";
    editBtn.addEventListener("click", () =>
      this.update_task(task, parentContainer)
    );

    parentContainer.appendChild(cardTitle);
    parentContainer.appendChild(cardDescription);
    parentContainer.appendChild(toDoBtn);
    parentContainer.appendChild(editBtn);
    const appContainer = document.getElementById("app");
    if (appContainer) {
      appContainer.appendChild(parentContainer);
    }
  }

  update_task(task: Tasks, parentContainer: HTMLElement) {
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.value = task.title;

    const descriptionInput = document.createElement("input");
    descriptionInput.type = "text";
    descriptionInput.value = task.description;
    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    saveBtn.addEventListener("click", () => {
      task.title = titleInput.value;
      task.description = descriptionInput.value;
      parentContainer.innerHTML = "";
      this.render_tasks(task);
    });

    parentContainer.appendChild(titleInput);
    parentContainer.appendChild(descriptionInput);
    parentContainer.appendChild(saveBtn);
  }
}

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  due_date: string;
}
const tasks: Record<number, Task> = {
  1: {
    id: 1,
    title: "task 1",
    description: "description 1",
    status: "done",
    due_date: "2021-09-01",
  },
  2: {
    id: 2,
    title: "task 2",
    description: "description 2",
    status: "done",
    due_date: "2021-09-02",
  },
  3: {
    id: 3,
    title: "task 3",
    description: "description 3",
    status: "done",
    due_date: "2021-09-03",
  },
};
