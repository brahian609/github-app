import { Injectable } from '@angular/core';
import { BaseRequestService } from '../../core/http/base-request.service';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable()
export class AppService {

  constructor(private readonly baseRequestService: BaseRequestService) { }

  getCommits(): Observable<any> {
    return this.baseRequestService.get(`${env.apiUrl}github/commits`);
  }
}
