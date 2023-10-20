import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { url } from "inspector";

type Contact = {
    name?:string,
    email?:string,
    message?:string,
    date?:string,
    select?:string,
}

export  async function POST(req:Request, res:NextResponse) {

    const data: Contact = await req.json();

    console.log(data);

    const {name, email,message,date,select} = data;

    console.log(`user : ${process.env.user}`)

    const transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.USER, // Use a more descriptive environment variable name
            pass: process.env.PASS, // Use a more descriptive environment variable name
        },
        
    });

    try {
        const mail = await transporter.sendMail({
            from: process.env.USER,
            to: process.env.USER, // Specify the recipient's email here
            replyTo: email,
            subject: `Contact form submission from ${name}`,
            html: `
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>
                <p>Select: ${select}</p>
                <p>Date: ${date}</p>
            `,
        });
    return new Response("message sent sucessfully", {
      status: 200,
    });
        // res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error(error);
    return new Response("Message send failed", {
      status: 500,
    });

        // res.status(500).json({ message: "Could not send the email, please try again" });
    }

}


export async function GET(request: Request){
    const {searchParams } = new URL(request.url)

    const name = searchParams.get('name')

    return NextResponse.json({name})
}