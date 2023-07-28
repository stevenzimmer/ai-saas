import { NextResponse } from "next/server";

import {auth} from "@clerk/nextjs"
import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function POST(req: Request) {

  try {
    const {userId} = auth();
    const body = await req.json();
    const { messages } = body;

    if( !userId ) {
      return new NextResponse(
        "Unauthorized",
        {
          status: 401,
        }
      );
    }

    if( !config.apiKey) {
      return new NextResponse(
        "OpenAI API Key not found",
        {
          status: 500,
        }
      );
    }


    if(!messages) {
      return new NextResponse(
        "Messages not found",
        {
          status: 400,
        }
      );
    }

    
  } catch (error) {
    console.log("conversation Error", error);
    return new NextResponse(
      "An error occurred. Please try again later.",
      {
        status: 500,
      }
    );
  }
}