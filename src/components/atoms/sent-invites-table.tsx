"use client"

import React from "react";
import { faker } from "@faker-js/faker";
import { Flag, Clock, CheckCircle, XCircle } from "lucide-react";

import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "../ui/table";
import { Badge } from "@/components/ui/badge"; // Assuming you have a Badge component

// --- Data Generation ---

type InviteStatus = "pending" | "accepted" | "declined";

type SentInvite = {
  id: string;
  to: { name: string; email: string; avatarUrl: string };
  date: Date;
  goal: { name: string; icon?: React.ReactNode };
  status: InviteStatus;
};

const getStatusIcon = (status: InviteStatus) => {
  switch (status) {
    case "accepted":
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    case "declined":
      return <XCircle className="h-4 w-4 text-red-500" />;
    case "pending":
    default:
      return <Clock className="h-4 w-4 text-yellow-500" />;
  }
};

const getStatusBadgeVariant = (status: InviteStatus) => {
  switch (status) {
    case "accepted":
      return "success"; // Assuming default is green/success
    case "declined":
      return "destructive"; // Assuming secondary is good for decline/neutral
    case "pending":
    default:
      return "pending"; // Assuming lite is good for pending/warning
  }
};

const makeSentInvites = (count = 8): SentInvite[] => {
  return Array.from({ length: count }).map(() => ({
    id: faker.string.uuid(),
    to: {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      avatarUrl: faker.image.avatar(),
    },
    date: faker.date.recent({ days: 90 }), // dates within last 90 days
    goal: {
      name: faker.word.words({ count: { min: 1, max: 3 } }),
      icon: <Flag className="h-4 w-4" />,
    },
    status: faker.helpers.arrayElement(["pending", "accepted", "declined"]) as InviteStatus,
  }));
};

const RAW_SENT_INVITES = makeSentInvites(9);

// --- Component ---

const SentInvitesHeader = [
  'To', 'Date', 'Goal', 'Status'
];

const SentInvitesTable = () => {
    // Sort by most recent date (descending)
    const invites = React.useMemo(() => {
        return [...RAW_SENT_INVITES].sort((a, b) => b.date.getTime() - a.date.getTime());
    }, []);

    return (
        <div className="w-full">
            <Table>
                <TableHeader>
                    <TableRow>
                        {SentInvitesHeader.map(header => (
                            <TableHead key={header}>{header}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {invites.length > 0 ? (
                        invites.map((invite) => (
                            <TableRow key={invite.id}>
                                
                                {/* To User */}
                                <TableCell className="flex items-center gap-3">
                                    <img
                                        src={invite.to.avatarUrl}
                                        alt={invite.to.name}
                                        className="h-10 w-10 rounded-full object-cover"
                                    />
                                    <div className="flex flex-col">
                                        <span className="font-medium">{invite.to.name}</span>
                                        <span className="text-sm text-muted-foreground">{invite.to.email}</span>
                                    </div>
                                </TableCell>

                                {/* Date */}
                                <TableCell>
                                    <div className="text-sm">
                                        {invite.date.toLocaleDateString()}
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        {invite.date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                                    </div>
                                </TableCell>

                                {/* Goal */}
                                <TableCell className="flex items-center gap-2">
                                    <span className="text-muted-foreground">{invite.goal.icon}</span>
                                    <span className="font-medium">{invite.goal.name}</span>
                                </TableCell>

                                {/* Status */}
                                <TableCell>
                                    <Badge variant={getStatusBadgeVariant(invite.status)} className="flex items-center gap-2 capitalize">
                                        {getStatusIcon(invite.status)}
                                        {invite.status}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={SentInvitesHeader.length} className="h-24 text-center">
                                No invites sent yet.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default SentInvitesTable;
