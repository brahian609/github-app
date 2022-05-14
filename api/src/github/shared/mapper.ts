import { UserDto } from '../dto';
import { CommitDto } from '../dto';

export const toUserDto = (data: any): UserDto => {
    const { name, html_url, avatar_url } = data;

    return {
        name,
        html_url,
        avatar_url,
    };
};

export const toCommitDto = (data: any): CommitDto => {
    return {
        name: data.commit.committer.name,
        date: data.commit.committer.date,
        message: data.commit.message,
    };
};
