import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddVaultSchema } from "@/src/validation/contact";
import { Button } from "./ui/button";
import { Input } from "@components/ui/input";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  const form = useForm<z.infer<typeof AddVaultSchema>>({
    mode: "onBlur",
    resolver: zodResolver(AddVaultSchema),
  });
  const submitForm: SubmitHandler<z.infer<typeof AddVaultSchema>> = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen bg-cover bg-center bg-garden my-8 py-6">
      <div className="flex justify-center items-center h-full">
        <div className="m-auto bg-white bg-opacity-80 p-8 rounded-lg shadow-md w-5/6">
          <h1 className="text-3xl font-bold text-center mb-6 text-green-700">
            Contact Us
          </h1>
          <p className="text-center mb-6">
            If you have any questions using the form below
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submitForm)}>
              <div className="space-y-4 grid sm:grid-cols-3 grid-cols-1 gap-4 mb-4">
                <div className="col-span-1 space-y-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-green-700">
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="please enter your name"
                            className="w-full px-4 py-2 border border-green-300 rounded-md focus:ring-green-500 focus:border-green-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-1">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-green-700">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="please enter your email"
                            className="w-full px-4 py-2 border border-green-300 rounded-md focus:ring-green-500 focus:border-green-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-1">
                  <FormField
                    control={form.control}
                    name="number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-green-700">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="please enter your phone number"
                            className="w-full px-4 py-2 border border-green-300 rounded-md focus:ring-green-500 focus:border-green-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-green-700">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="please enter any message"
                        className="w-full px-4 py-2 border border-green-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="mt-6 flex justify-center">
                <Button
                  type="submit"
                  className=" text-white py-6 px-10 text-lg rounded-md hover:bg-green-600"
                >
                  Send
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
