"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Trophy } from "lucide-react"

interface Winner {
  id: number
  fullName: string
  email: string
  level: string
  score: number
  wonLevels: string
  winnerCode: string
  phone: string
  profession: string
}

export function Dashboard() {
  const [winners, setWinners] = useState<Winner[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const fetchWinners = async () => {
      try {
        const response = await fetch("/api/winners")
        if (!response.ok) {
          throw new Error("Failed to fetch winners")
        }
        const data = await response.json()
        setWinners(data)
      } catch (error) {
        console.error("Error fetching winners:", error)
      }
    }

    fetchWinners()
  }, [])

  const filteredWinners = winners.filter(
    (winner) =>
      winner.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      winner.winnerCode.toLowerCase().includes(searchTerm.toLowerCase()),
  )

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
            <TableHead>Won Levels</TableHead>
            <TableHead>Winner Code</TableHead>
            <TableHead>Grand Winner</TableHead>
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
              <TableCell>{winner.wonLevels}</TableCell>
              <TableCell>{winner.winnerCode}</TableCell>
              <TableCell>
                {winner.wonLevels.split(",").length === 3 && <Trophy className="text-yellow-400" />}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

