import { useAuth } from "@/hooks/authContext";
import { useLoginUser } from "@/services/LoginUser";
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { useForm } from 'react-hook-form';

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(4, {
    message: "Password must be at least 6 characters.",
  }),
});


export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const { login } = useAuth();
  const loginUserMutation = useLoginUser();
  const navigate = useNavigate();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { email, password } = values;  
  
    try {
      const result = await loginUserMutation.mutateAsync({ email, password });
      login(result);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  }
  return (
    <div className="flex justify-center items-center h-screen bg-lightgreen2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-xs p-4 border rounded bg-white"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"  
                    placeholder=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="btn-form-green w-full mt-4" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}