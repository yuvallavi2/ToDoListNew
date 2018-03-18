import { ComponentListBase } from "./ComponentListBase";
import { Component } from "@angular/core";

import { TodoListHadFinal } from "./Final/TodoListHadFinal/TodoListHadFinal.component";

import { ToDoListFinal } from "./Final/TodoListHadFinal/ToDoList/ToDoListFinal.component";

export class ComponentsList extends ComponentListBase {
	static compHash: { [x: string]: any } = {
		TodoListHadFinal: TodoListHadFinal,

		ToDoListFinal: ToDoListFinal
	};

	static ComponentArray: any[] = [TodoListHadFinal, ToDoListFinal];

	static getArray() {
		return this.ComponentArray;
	}

	public getComponents(name: string): Component {
		return ComponentsList.compHash[name];
	}

	public static getAllComponents() {
		return this.ComponentArray;
	}

	public getTitle(): string {
		return "ToDoList";
	}
}
