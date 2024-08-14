import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Importing icons from react-icons
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen mt-10 mb-10">
      <Card className="w-[500px] border-none my-8"> {/* Added top and bottom margin */}
        <CardHeader className="mb-4"> {/* Added bottom margin */}
          <CardTitle>Create a GrantX account</CardTitle>
          <CardDescription>Already have an account? Login here</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2 mb-4">
            <Button className="w-full mb-2" variant="outline">
              <FaGithub className="inline mr-2" /> GitHub
            </Button>
            <Button className="w-full" variant="outline">
              <FaGoogle className="inline mr-2" /> Google
            </Button>
          </div>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5 mb-4 text-zinc-400"> {/* Added bottom margin */}
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="hey@harshbhat.me" required />
              </div>
              <div className="flex flex-col space-y-1.5 text-zinc-400">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••••••"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex mt-4"> {/* Added top margin */}
          <Button className="w-full">Sign Up</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
