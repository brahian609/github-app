import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GithubService {
    private readonly GITHUB_API_URL: string;
    private readonly GITHUB_USERNAME: string;
    private readonly GITHUB_REPO: string;
    constructor(private httpService: HttpService, private configService: ConfigService) {
      this.GITHUB_API_URL = configService.get<string>('GITHUB_API_URL');
      this.GITHUB_USERNAME = configService.get<string>('GITHUB_USERNAME');
      this.GITHUB_REPO = configService.get<string>('GITHUB_REPO');
    }

    getCommits(): Observable<AxiosResponse<object[]>> {
      return this.httpService.get(`${this.GITHUB_API_URL}/repos/${this.GITHUB_USERNAME}/${this.GITHUB_REPO}/commits`)
        .pipe(
          map((response: AxiosResponse) => {
            return response.data;
          }),
        );
    }
}
