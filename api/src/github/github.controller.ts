import { Controller, Get } from '@nestjs/common';
import { GithubService } from './github.service';
import { UserDto } from "./dto";
import { CommitDto } from "./dto";

@Controller('github')
export class GithubController {
    constructor(private githubService: GithubService) {}

    @Get('user')
    async getUser(): Promise<UserDto> {
        return await this.githubService.getUser();
    }

    @Get('commits')
    async getAllCommits(): Promise<CommitDto[]> {
        return await this.githubService.getCommits();
    }
}
