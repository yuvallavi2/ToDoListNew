import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../../magic/src/services/task.magics.service";

@Component({
	selector: "mga-TodoListHadFinal",
	providers: [TaskMagicService],
	styleUrls: ["./TodoListHadFinal.component.css"],
	templateUrl: "./TodoListHadFinal.component.html"
})
export class TodoListHadFinal extends BaseTaskMagicComponent {}
