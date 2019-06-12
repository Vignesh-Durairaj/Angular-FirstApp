import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchEmployee'
})
export class SearchEmployeePipe implements PipeTransform {

  transform(piepData, pipeQuery): any {
    return piepData.filter(emp => emp['name'].toLowerCase().includes(pipeQuery.toLowerCase()));
  }

}
