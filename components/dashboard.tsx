"use client";

import { useState, useEffect } from "react";
import { getWinners } from "@/app/actions/winners";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";

interface Winner {
  id: number;
  fullName: string | null;
  email: string;
  level: string;
  score: number;
  winnerCode: string;
  phone: string | null;
  profession: string | null;
}

export function Dashboard() {
  const [winners, setWinners] = useState<Winner[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchWinners = async () => {
      const response = await getWinners();
      if (response?.success) {
        setWinners(Array.isArray(response.winners) ? response.winners : []);
      } else {
        console.error("Error fetching winners:", response?.error);
      }
    };

    fetchWinners();
  }, []);


  const filteredWinners = winners.filter(
    (winner) =>
      winner.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      winner.winnerCode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Winner Dashboard</h1>
      <Input
        type="text"
        placeholder="Search by email or winner code"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Profession</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Score</TableHead>
            <TableHead>Winner Code</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredWinners.map((winner) => (
            <TableRow key={winner.id}>
              <TableCell>{winner.fullName}</TableCell>
              <TableCell>{winner.email}</TableCell>
              <TableCell>{winner.phone}</TableCell>
              <TableCell>{winner.profession}</TableCell>
              <TableCell>{winner.level}</TableCell>
              <TableCell>{winner.score}</TableCell>
              <TableCell>{winner.winnerCode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
