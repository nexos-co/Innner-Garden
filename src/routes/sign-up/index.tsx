import { CardContent, Card } from '@/components/ui/card'
import { FieldGroup, FieldLabel, FieldDescription, FieldSeparator } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Field } from '@/components/ui/field'
import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Trees } from 'lucide-react'

export const Route = createFileRoute('/sign-up/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
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
                    <h1 className="text-2xl font-bold">Create your account</h1>
                    <p className="text-muted-foreground text-sm text-balance">
                      Enter your email below to create your account
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
                    <Field className="grid grid-cols-2 gap-4">
                      <Field>
                        <FieldLabel htmlFor="password">Password</FieldLabel>
                        <Input id="password" type="password" required />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="confirm-password">
                          Confirm Password
                        </FieldLabel>
                        <Input id="confirm-password" type="password" required />
                      </Field>
                    </Field>
                  </Field>
                  <Field>
                    <Button type="submit">Create Account</Button>
                  </Field>
                  <FieldSeparator className="text-center">
                    Already have an account? <a href="#">Sign in</a>
                  </FieldSeparator>
                </FieldGroup>
              </form>
              <div className="bg-background-secondary relative aspect-square rounded-full mx-4">
              </div>
            </CardContent>
          </Card>
          <FieldDescription className="px-6 text-center">
            By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
            and <a href="#">Privacy Policy</a>.
          </FieldDescription>
        </div>
      </div>
    </div>
  )
}
