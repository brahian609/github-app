import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { UserDto } from './dto';
import { CommitDto } from './dto';
import { toCommitDto, toUserDto } from './shared/mapper';

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

    async getUser(): Promise<UserDto> {
        return await this.httpService.get(`${this.GITHUB_API_URL}/users/${this.GITHUB_USERNAME}`).toPromise()
            .then((response: AxiosResponse) => {
                if (response.status === 200) {
                    return toUserDto(response.data);
                } else {
                    return response.data;
                }
            }).catch((error: any) => console.log(error));
    }

    async getCommits(): Promise<CommitDto[]> {
      return await this.httpService.get(`${this.GITHUB_API_URL}/repos/${this.GITHUB_USERNAME}/${this.GITHUB_REPO}/commits`).toPromise()
          .then((response: AxiosResponse) => {
              if (response.status === 200) {
                  return response.data.map(row => toCommitDto(row));
              } else {
                  return response.data;
              }
          }).catch((error: any) => console.log(error));
    }
}
