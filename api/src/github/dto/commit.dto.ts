import {
    IsOptional,
    IsString,
} from 'class-validator';

export class CommitDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    date?: string;

    @IsString()
    @IsOptional()
    message?: string;
}
