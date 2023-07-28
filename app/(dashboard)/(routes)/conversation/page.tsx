"use client";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

import Heading from '@/components/Heading'
import { MessageSquare } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { formSchema } from "./constants";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function ConversationPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  }


  return (
    <div>
      <Heading title="Conversation" description='Our most advanced conversation model' icon={MessageSquare} iconColor='text-violet-500' bgColor='bg-violet-50' />
      <div className='px-4 lg:px-8'>
        <Form {...form} >
          <form className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField name="prompt" render={({ field}) => (
              <FormItem className="col-span-12 lg:col-span-10">
                <FormControl {...field} placeholder="Enter a prompt" className="m-0 p-0">
                  <Input 
                  {...field}  
                  className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                  disabled={isLoading}
                  placeholder="How do I calculate the radius of a circle?" />
                </FormControl>
              </FormItem>
            )} />
            <Button type="submit" className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>
              Generate 
            </Button>
          </form>
        </Form>
        <div className="space-y-4 mt-4">
          Messages content
        </div>
      </div>
      
    </div>
  )
}
