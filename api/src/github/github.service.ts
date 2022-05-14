import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GithubService {
    constructor(private httpService: HttpService) {}

    getCommits(): Observable<AxiosResponse<object[]>> {
        return this.httpService.get(`https://api.github.com/repos/brahian609/github-app/commits`)
            .pipe(
                map((response: AxiosResponse) => {
                    return response.data;
                }),
            );
    }
}
