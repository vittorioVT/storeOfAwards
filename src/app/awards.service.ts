import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Awards } from "./shared/interfaces/awards";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AwardsService {
  baseUrl: string = "http://localhost:13764/api/awards";

  constructor(private http: HttpClient) {}

  getAll(): Observable<Awards[]> {
    return this.http.get<Awards[]>(this.baseUrl);
  }
}
