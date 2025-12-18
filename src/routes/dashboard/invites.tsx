'use client'
import { Fades } from "@/components/animate-ui/primitives/effects/fade"
import ReceivedInvitesTable from "@/components/atoms/received-invites-table"
import SentInvitesTable from "@/components/atoms/sent-invites-table"
import { Badge, Button } from "@/components/storybook"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { createFileRoute } from "@tanstack/react-router"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export const Route = createFileRoute('/dashboard/invites')({
    component: RouteComponent,
})


function RouteComponent() {
    const [isOpenReceived, setIsOpenReceived] = useState(false);
    const [isOpenSent, setIsOpenSent] = useState(false);


    return <div className='flex flex-col gap-4'>
        <Fades>
            <Card variant='card'>
                <CardContent >
                    <Collapsible
                        open={isOpenReceived}
                        onOpenChange={setIsOpenReceived}
                        className=""
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex gap-5 items-center">
                                <CollapsibleTrigger asChild>
                                    <Button variant="ghost" size="icon" className="size-8">
                                        {!isOpenReceived ? <ChevronDown /> : <ChevronUp />}
                                    </Button>
                                </CollapsibleTrigger>
                                <h2>Invites Received</h2>
                            </div>
                            <Badge variant="success"> {parseInt((Math.random() * 100).toString())}</Badge>

                        </div>

                        <CollapsibleContent className="">
                            <ReceivedInvitesTable></ReceivedInvitesTable>
                        </CollapsibleContent>
                    </Collapsible>
                </CardContent>
            </Card>
            <Card variant='card' className="w-full">
                <CardContent >
                    <Collapsible
                        open={isOpenSent}
                        onOpenChange={setIsOpenSent}
                        className=""
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex gap-5 items-center">
                                <CollapsibleTrigger asChild>
                                    <Button variant="ghost" size="icon" className="size-8">
                                        {!isOpenSent ? <ChevronDown /> : <ChevronUp />}
                                    </Button>
                                </CollapsibleTrigger>
                                <h2>Invites Sent</h2>
                            </div>
                            <Badge variant="destructive"> {parseInt((Math.random() * 100).toString())}</Badge>

                        </div>

                        <CollapsibleContent className="">
                            <SentInvitesTable></SentInvitesTable>
                        </CollapsibleContent>
                    </Collapsible>
                </CardContent>
            </Card>


        </Fades>
    </div>
}
