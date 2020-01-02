import { Injectable } from "@angular/core";
import { ISession } from "../shared/event.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { handleError } from "../shared";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class VoterService {
  constructor(private http: HttpClient) {}

  addVoter(eventId: number, session: ISession, voterName: string) {
    session.voters.push(voterName);

    var options = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.http
      .post(url, {}, options)
      .pipe(catchError(handleError("addVoter")))
      .subscribe();
  }

  deleteVoter(eventId: number, session: ISession, voterName: string) {
    session.voters = session.voters.filter(v => v !== voterName);

    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

    this.http
      .delete(url)
      .pipe(catchError(handleError("deleteVoter")))
      .subscribe();
  }

  userHasVoted(session: ISession, voterName: string) {
    return session.voters.some(v => v === voterName);
  }
}
