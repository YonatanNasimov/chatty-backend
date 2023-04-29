import { ObjectId } from "mongoose";
import { Request, Response } from "express";
import { joiValidation } from "@global/decorators/joi-validation.decorators";
import { signupSchema } from "@auth/schemes/signup";
import { IAuthDocument, ISignUpData } from '@auth/interfaces/auth.interface';
import { authService } from "@service/db/auth.service";
import { BadRequestError } from "@global/helpers/error-handler";
import { Helpers } from "@global/helpers/helpers";

export class SignUp {
    @joiValidation(signupSchema)
    public async create(req: Request, res: Response): Promise<void> {
        const { username, email, password, avatarColor, avatarImage } = req.body;
        const checkIfUserExist: IAuthDocument = await authService.getUserByUsernsmeOrEmail(username, email);
        if (checkIfUserExist) {
            throw new BadRequestError('Invalid credentials');
        }

        const authObjectId: ObjectId = new ObjectId();
        const userObjectId: ObjectId = new ObjectId();
        const uId = `${Helpers.generateRandomIntegers(12)}`;
        const authData: IAuthDocument = SignUp.prototype.signupData({
            _id: authObjectId,
            uId,
            username,
            email,
            password,
            avatarColor
        });
    }

    private signupData(data: ISignUpData): IAuthDocument {
        const { _id, username, email, uId, password, avatarColor } = data;
        return {
            _id,
            uId,
            username: Helpers.firstLetterToUpperCase(username),
            email: Helpers.lowerCase(email),
            password,
            avatarColor,
            createdAt: new Date()
        } as IAuthDocument;
    }
}