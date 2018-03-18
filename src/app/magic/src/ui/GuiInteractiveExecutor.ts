import {InteractiveCommandType, GuiInteractive, Styles} from "@magic/gui";
import {BaseTaskMagicComponent} from './app.baseMagicComponent';
import {isNullOrUndefined} from "util";
import {TaskMagicService} from '../services/task.magics.service';

export class GuiInteractiveExecutor {
  command: GuiInteractive;
  component: BaseTaskMagicComponent;
  task: TaskMagicService;

  Run(): void {
    // Sets the currentContextID
    try {
      switch (this.command._commandType) {

        case InteractiveCommandType.GET_VALUE:
          this.onValue();
          break;

        case InteractiveCommandType.GET_ROWS_IN_PAGE:
          this.onGetRowsInPage();
          break;
        case InteractiveCommandType.MESSAGE_BOX:
          this.OnMessageBox();
          break;
      }
    }

    catch (ex) {
      throw ex;
      //want to see all the exceptions for now
    }
  }


  private  onValue(): void {
    let result = this.task.getFormControl("" + this.command._line, this.command.controlName);
    let val: any;
    if (!isNullOrUndefined(result)) {
      val = result.value;
    }
    else if (this.task.isTableControl(this.command.controlName))
      val = this.task.getValue(this.command.controlName, "" + this.command._line);
    val = this.component.ConvertValToNative(this.command.controlName, this.command._line, val);

    this.command._mgValue.obj = val;
  }

  private  onGetRowsInPage(): void {
    this.command._intVal1 = this.component.getPageSize();
  }

  private OnMessageBox() {

    this.command._mgValue.number = <number>Styles.MSGBOX_RESULT_OK;

    // check if it is confirmation box
    var isConfirm = (this.command._mgValue.style & Styles.MSGBOX_BUTTON_OK_CANCEL) != 0;
    if (isConfirm) {
      if (!confirm(this.command._mgValue.str))
        this.command._mgValue.number =  <number>Styles.MSGBOX_RESULT_CANCEL;
    }
    else {
      alert(this.command._mgValue.str);
    }
  }
}
