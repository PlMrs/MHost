export class SignInDto {

    access_token: string;

    grant_type: string = "password";

    expires_in:number;

    scope: string = "*";


}
