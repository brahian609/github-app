import { Injectable } from '@angular/core';
import { BaseRequestService } from '../../core/http/base-request.service';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';
import { User } from "../models/user";
import { Commit } from "../models/commit";

@Injectable()
export class AppService {

  constructor(private readonly baseRequestService: BaseRequestService) { }

  getUser(): Observable<User> {
    return this.baseRequestService.get(`${env.apiUrl}github/user`);
  }

  getCommits(): Observable<Commit[]> {
    return this.baseRequestService.get(`${env.apiUrl}github/commits`);
  }
}
