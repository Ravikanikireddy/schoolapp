import { CanDeactivateFn } from '@angular/router';

export const notifyGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
    if(confirm("if you go back your progress will not save! Are you willing to go back")){
    return true;
    }
    else{
      return false;
    }
}
