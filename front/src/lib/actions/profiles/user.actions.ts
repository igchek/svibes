"use server"

import User from "../../models/profiles/user.models";
import { revalidatePath } from "next/cache";
import { connectToDB } from "../../validations/mongoose";
import Vibe from "../../models/content/vibe.models";


interface editParams {
    userId:string,
    nick:string,
    pic:string,
    path:string
}

export async function updateUser(
    {
        userId,
        nick,
        pic,
        path
    }:editParams
    

):Promise<void>{
    try{
        connectToDB()
    await User.findOneAndUpdate(
        {userId:userId},
        {
            nick: nick.toLocaleLowerCase(),
            pic 
        },
        {upsert:true}
    )
    if (path==="/profile/edit"){
        revalidatePath(path)
    }
    }
    catch (error:any){
        throw new Error(`updating/creating user ${nick} crashed: ${error.message}`)
    }
    
}


export async function fetchInvolvedVibes(userId:string) {
    try {
        connectToDB()
        const user = await User.findOne({id:userId}).
        populate({
            path:'vibes',
            model:Vibe
        }).
        exec()

        const vibes = await user.vibes

        return vibes



    }
    catch (error:any) {
        throw new Error(`Crashed fetching involved vibes: ${error.message}`)
    }
}


interface userCreateI {
    nic:string
    password:string
    pic:string
    email?:string

}
export async function createUser({nic, password, pic, email}:userCreateI){
    try{
        let id = Math.random()*10000
        await User.create({
            core:{
                id:id.toString(),
                log:`${nic+id.toString()}`,
                nic:nic,
                pic:pic,
                password:password,
                email:email
            }

        })
    }
    catch(error:any){
        throw new Error(`Crashed creating user profile: ${error.message}`)
    }
}


