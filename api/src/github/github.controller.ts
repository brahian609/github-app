import { Controller, Get } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
    constructor(private githubService: GithubService) {}

    @Get('user')
    getUser(): object {
        return this.githubService.getUser();
    }

    @Get('commits')
    getAllCommits(): object {
        return this.githubService.getCommits();
    }
}
