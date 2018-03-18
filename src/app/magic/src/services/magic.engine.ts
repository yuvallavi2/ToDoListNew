/**
 * Created by rinav on 05/07/2017.
 */
import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {MagicBridge, GuiEvent} from "@magic/engine";
import {UIBridge, GuiCommand, GuiInteractive} from "@magic/gui";


@Injectable()
export class MagicEngine {
  magic = MagicBridge;
  isStub  = false;
  //TODO - unregister
  refreshDom: Subject<GuiCommand> = new Subject();
  interactiveCommands: Subject<GuiInteractive> = new Subject();

  startMagic() {
    this.magic.registerExecuteCommands(data => {
      if (!this.isStub) {
        const list = data as GuiCommand[];
        for (let c of list) {
          this.refreshDom.next(c);
        }
      }
    });

    this.magic.registerInteractiveCallback(data => {
      if (!this.isStub) {
          this.interactiveCommands.next(data);
        }
    });

    this.magic.StartMagic();
  }

  insertEvent(guiEvent: GuiEvent) {
    if (!this.isStub)
      this.magic.insertEvent(guiEvent);

  }

  registerOpenFormCallback(cb) {
    if (!this.isStub) {
      try {
        this.magic.registerOpenFormCallback(cb);
      }
      catch (e) {
        console.log('magic engine not found');
        console.log('moving to stub mode');
        this.isStub = true;

      }
    }

  }
  saveData(data:string)
  {
    //this.magic.saveData(data);
  }

}
