"use client"

import React from "react";
import { faker } from "@faker-js/faker";
import { Flag } from "lucide-react";

import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "../ui/table";
import { Button } from "@/components/ui/button";

type Invite = {
  id: string;
  from: { name: string; email: string; avatarUrl: string };
  date: Date;
  goal: { name: string; icon?: React.ReactNode };
};

const makeInvites = (count = 8): Invite[] => {
  return Array.from({ length: count }).map(() => ({
    id: faker.string.uuid(),
    from: {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      avatarUrl: faker.image.avatar(),
    },
    date: faker.date.recent({ days: 60 }), // dates within last 60 days
    goal: {
      name: faker.word.words({ count: { min: 1, max: 2 } }),
      icon: <Flag className="h-6 w-4" />,
    },
  }));
};

const RAW_INVITES = makeInvites(9);

export default function ReceivedInvitesTable() {
  const invites = React.useMemo(() => {
    return [...RAW_INVITES].sort((a, b) => b.date.getTime() - a.date.getTime());
  }, []);

  // track selection per invite: "none" | "join" | "decline"
  const [selection, setSelection] = React.useState<Record<string, "none" | "join" | "decline">>(
    {}
  );

  const handleSelect = (id: string, choice: "join" | "decline") => {
    setSelection((prev) => ({
      ...prev,
      [id]: prev[id] === choice ? "none" : choice, // toggle off if same pressed
    }));
  };

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>From</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Goal</TableHead>
            <TableHead className="text-center"> </TableHead>
            <TableHead className="text-center"> </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {invites.length > 0 ? (
            invites.map((invite) => {
              const selected = selection[invite.id] ?? "none";
              return (
                <TableRow key={invite.id} className="group">
                  <TableCell className="flex items-center gap-3">
                    <img
                      src={invite.from.avatarUrl}
                      alt={invite.from.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <span className="font-medium">{invite.from.name}</span>
                      <span className="text-sm text-muted-foreground">{invite.from.email}</span>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="text-sm">
                      {invite.date.toLocaleDateString()}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {invite.date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  </TableCell>

                  <TableCell className=" gap-2">
                    <span className="text-muted-foreground">{invite.goal.icon}</span>
                    <span className="font-medium">{invite.goal.name}</span>
                  </TableCell>

                  <TableCell className="text-center">
                    <Button
                      variant={selected === "join" ? "success" : "outline"}
                      size="sm"
                      onClick={() => handleSelect(invite.id, "join")}
                      aria-pressed={selected === "join"}
                    >
                      Join
                    </Button>
                  </TableCell>

                  <TableCell className="text-center">
                    <Button
                      variant={selected === "decline" ? "destructive" : "outline"}
                      size="sm"
                      onClick={() => handleSelect(invite.id, "decline")}
                      aria-pressed={selected === "decline"}
                    >
                      Decline
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="h-24 text-center">
                No invites received yet.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
