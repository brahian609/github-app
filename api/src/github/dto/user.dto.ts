import {
    IsOptional,
    IsString,
} from 'class-validator';

export class UserDto {
    @IsString()
    @IsOptional()
    html_url?: string;

    @IsString()
    @IsOptional()
    avatar_url?: string;

    @IsString()
    @IsOptional()
    name?: string;
}
