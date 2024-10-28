"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaEdit, FaEye, FaRocket, FaSave, FaStar } from "react-icons/fa";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import MarkdownPreview from "@/components/markdown/MarkdownPreview";

const FormSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  image_url: z.string().url({
    message: "Invalid URL",
  }),
  content: z.string().min(50, {
    message: "Content must be at least 50 characters.",
  }),
  is_published: z.boolean(),
  is_premium: z.boolean(),
});

export default function CreateBlog() {
  const [isPreview, setIsPreview] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "all",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      image_url: "",
      content: "",
      is_published: true,
      is_premium: false,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full  border rounded-md space-y-6 p-2"
      >
        <div className="p-5 flex gap-4 items-center">
          <span
            role="button"
            tabIndex={0}
            className="flex items-center gap-1 bg-zinc-700 border p-2 rounded-md hover:ring-2 hover:ring-zinc-400 transition-all"
            onClick={() => setIsPreview(!isPreview)}
          >
            {isPreview ? (
              <>
                <FaEdit /> Edit
              </>
            ) : (
              <>
                <FaEye /> Preview
              </>
            )}
          </span>
          <FormField
            control={form.control}
            name="is_premium"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <span className="flex items-center gap-1 bg-zinc-700 border p-2 rounded-md hover:ring-2 hover:ring-zinc-400 transition-all">
                    <FaStar />
                    Premium
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </span>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="is_published"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <span className="flex items-center gap-1 bg-zinc-700 border p-2 rounded-md hover:ring-2 hover:ring-zinc-400 transition-all">
                    <FaRocket />
                    Publish
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </span>
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="flex items-center gap-1">
            <FaSave /> Save
          </Button>
        </div>

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div
                  className={cn(
                    "p-2 flex break-words gap-2",
                    isPreview ? "divide-x-0" : "divide-x"
                  )}
                >
                  <Input
                    placeholder="Title"
                    {...field}
                    className={cn(
                      "text-lg font-medium leading-relaxed",
                      isPreview ? "w-0 p-0" : "w-full lg:w-1/2"
                    )}
                  />
                  <div
                    className={cn(
                      "lg:px-10",
                      isPreview ? "mx-auto w-full lg:w-4/5" : "w-1/2 bg:block"
                    )}
                  >
                    <h1 className="text-3xl font-medium">
                      {form.getValues().title}
                    </h1>
                  </div>
                </div>
              </FormControl>
              {form.getFieldState("title").invalid &&
                form.getValues().title && <FormMessage />}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image_url"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div
                  className={cn(
                    "p-2 flex break-words gap-2",
                    isPreview ? "divide-x-0" : "divide-x"
                  )}
                >
                  <Input
                    placeholder="Image URL"
                    {...field}
                    className={cn(
                      "text-lg font-medium leading-relaxed",
                      isPreview ? "w-0 p-0" : "w-full lg:w-1/2"
                    )}
                  />
                  <div
                    className={cn(
                      "lg:px-10",
                      isPreview ? "mx-auto w-full lg:w-4/5" : "w-1/2 bg:block"
                    )}
                  >
                    {!isPreview ? (
                      <p>Click Preview to see image</p>
                    ) : (
                      <div className="relative h-80 border rounded-md">
                        <Image
                          src={form.getValues().image_url}
                          alt="preview"
                          className="object-cover object-center rounded-md"
                          fill
                        />
                      </div>
                    )}
                  </div>
                </div>
              </FormControl>
              {form.getFieldState("image_url").invalid &&
                form.getValues().image_url && <FormMessage />}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div
                  className={cn(
                    "p-2 flex break-words gap-2",
                    isPreview ? "divide-x-0" : "divide-x"
                  )}
                >
                  <Textarea
                    placeholder="Content"
                    {...field}
                    className={cn(
                      "text-lg font-medium leading-relaxed resize-none h-70vh",
                      isPreview ? "w-0 p-0" : "w-full lg:w-1/2"
                    )}
                  />
                  <div
                    className={cn(
                      "lg:px-10",
                      isPreview ? "mx-auto w-full lg:w-4/5" : "w-1/2 bg:block"
                    )}
                  >
                    <MarkdownPreview content={form.getValues().content} />
                  </div>
                </div>
              </FormControl>
              {form.getFieldState("content").invalid &&
                form.getValues().content && <FormMessage />}
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
