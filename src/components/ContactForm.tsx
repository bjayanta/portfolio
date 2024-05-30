"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { toast } from "./ui/use-toast";
import Link from "next/link";

const schema = z.object({
    name: z.string().min(3, {message: "Name must be at least 3 characters."}),
    email: z
        .string()
        .min(1, {message: "This field has to be filled."})
        .email("This is not a valid email."),
    website: z.string().url().optional(),
    description: z
        .string()
        .min(3, {message: "Description must be at least 3 characters."})
        .max(100, {message: "Description must not be longer than 100 characters."}),
})

const ContactForm = () => {
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            website: "",
            description: "",
        },
    })

    function onSubmit(values: z.infer<typeof schema>) {
        console.log(values)

        toast({
            title: "You submitted the following values:",
            description: (
              <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                <code className="text-white">{JSON.stringify(values, null, 2)}</code>
              </pre>
            ),
        })
    }

    return (
        <section className="py-24">
            <div className="container grid grid-cols-2 items-center gap-40">
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        {/* <FormLabel>Your name</FormLabel> */}

                                        <FormControl>
                                            <Input placeholder="Your name" {...field} className="h-12 border border-black" />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        {/* <FormLabel>Email address</FormLabel> */}

                                        <FormControl>
                                            <Input placeholder="Email address" {...field} className="h-12 border border-black" />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="website"
                                render={({ field }) => (
                                    <FormItem>
                                        {/* <FormLabel>Your website (If exists)</FormLabel> */}

                                        <FormControl>
                                            <Input placeholder="Your website (If exists)" {...field} className="h-12 border border-black" />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        {/* <FormLabel>How can I help you?</FormLabel> */}

                                        <FormControl>
                                            <Textarea placeholder="How can I help you?" className="min-h-[120px] border border-black resize-none" {...field} />
                                        </FormControl>

                                        <FormDescription>
                                            This is your public display name.
                                        </FormDescription>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            
                            <div className="space-x-4 flex justify-end">
                                <Button type="button" variant="outline" onClick={() => form.reset()}>Reconstruct</Button>
                                <Button type="submit">Get In Touch</Button>
                            </div>
                        </form>
                    </Form>
                </div>

                <article className="space-y-8">
                    <h2 className="text-5xl font-extrabold">
                        <span>Let&lsquo;s</span>{' '}
                        <span className="text-orange-600">talk</span>{' '}
                        <span>for</span><br/>
                        <span>Something special</span>
                    </h2>

                    <p className="text-zinc-500">I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
                    
                    <div className="flex flex-col space-y-2 text-2xl font-bold">
                        <Link href="mailto:hello@jayanta.me" className="hover:text-orange-600">hello@jayanta.me</Link>
                        <p>
                            <Link href="tel:+880177521xxxx" className="hover:text-orange-600">+880 1775 21xxxx</Link>, {' '}
                            <Link href="tel:+880190340xxxx" className="hover:text-orange-600">+880 1903 40xxxx</Link>
                        </p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default ContactForm;