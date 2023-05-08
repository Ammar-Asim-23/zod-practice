import {z} from 'zod'
import { fromZodError } from 'zod-validation-error';

const hobbies = ["Programming", "Reading"] as const;

const UserSchema = z.object({
    name: z.string().min(3),
    age: z.number().gt(0),
    birthday: z.date(),
    isProgrammer: z.boolean().default(true),
    hobby : z.enum(hobbies)
}).partial().passthrough();

// type User = z.infer<typeof UserSchema>

const user= {
    name: "Ammar",
    age: -20,
    birthday: new Date('June 24, 2003 03:24:00'),
    hobby : "Reading",
    username: "Ammarasim@23"

};


const result = UserSchema.safeParse(user)

if (!result.success)
{
    console.log(fromZodError(result.error))
}

;
