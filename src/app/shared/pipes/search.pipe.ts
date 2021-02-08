import { Pipe, PipeTransform } from "@angular/core";
import { Awards } from "../interfaces/awards";

@Pipe({
  name: "searchAwards"
})
export class SearchPipe implements PipeTransform {
  transform(awards: Awards[], search = ""): Awards[] {
    if (!search.trim()) {
      return awards;
    }
    return awards.filter(award => {
      return award.Name.toLowerCase().includes(search.toLowerCase());
    });
  }
}
