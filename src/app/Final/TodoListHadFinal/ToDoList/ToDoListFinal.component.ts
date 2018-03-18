import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../../../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../../../magic/src/services/task.magics.service";

@Component({
	selector: "mga-ToDoListFinal",
	providers: [TaskMagicService],
	styleUrls: ["./ToDoListFinal.component.css"],
	templateUrl: "./ToDoListFinal.component.html"
})
export class ToDoListFinal extends BaseTaskMagicComponent {}
