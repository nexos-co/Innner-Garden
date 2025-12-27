import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { createFileRoute } from '@tanstack/react-router'
import { Trees } from 'lucide-react'

export const Route = createFileRoute('/sign-in/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <div className={cn("flex flex-col gap-6")}>
          <Card className="overflow-hidden p-0">
            <CardContent className="grid p-0 md:grid-cols-2">
              <form className="p-6 md:p-8">
                <FieldGroup>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <a href="#" className="flex items-center justify-center gap-2 font-medium">
                      <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                        <Trees className="size-4" />
                      </div>
                      Inner Garden
                    </a>
                    <h1 className="text-2xl font-bold">Login to your account</h1>
                    <p className="text-muted-foreground text-balance">
                      Enter your email below to login to your account
                    </p>
                  </div>
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </Field>
                  <Field>
                    <div className="flex items-center">
                      <FieldLabel htmlFor="password">Password</FieldLabel>
                      <a
                        href="#"
                        className="ml-auto text-sm underline-offset-2 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <Input id="password" type="password" required />
                  </Field>
                  <Field>
                    <Button type="submit">Login</Button>
                  </Field>
                  <FieldSeparator className="text-center">
                    Don&apos;t have an account? <a href="#">Sign up</a>
                  </FieldSeparator>
                </FieldGroup>
              </form>
              <div className="bg-background-secondary relative aspect-square rounded-full">
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
