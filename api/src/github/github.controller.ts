import { Controller, Get } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github/commits')
export class GithubController {
    constructor(private githubService: GithubService) {
    }

    @Get()
    getAllCommits(): object {
        return this.githubService.getCommits();
    }
}
