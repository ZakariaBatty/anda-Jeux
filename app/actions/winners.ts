'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Server action to create or update a winner
export async function createWinner(winner: {
   fullName: string;
   email: string;
   phone?: string;
   profession?: string;
   level: string;
   score: number;
   wonLevels: string[];
   winnerCode: string;
}) {
   try {
      const {
         fullName,
         email,
         phone,
         profession,
         level,
         score,
         wonLevels,
         winnerCode,
      } = winner;

      if (
         !email ||
         !level ||
         score === undefined ||
         !wonLevels ||
         !winnerCode
      ) {
         return { error: 'Missing required fields' };
      }

      const existingWinner = await prisma.winner.findUnique({
         where: { email },
      });

      const existingLevels = existingWinner
         ? existingWinner.wonLevels.split(',')
         : [];
      const updatedWonLevels = [
         ...new Set([...existingLevels, ...wonLevels]),
      ].join(',');

      const updatedWinner = await prisma.winner.upsert({
         where: { email },
         update: {
            fullName: fullName ?? undefined,
            phone: phone ?? undefined,
            profession: profession ?? undefined,
            score: { increment: score },
            wonLevels: updatedWonLevels,
         },
         create: {
            fullName,
            email,
            phone,
            profession,
            level,
            score,
            wonLevels: updatedWonLevels,
            winnerCode,
         },
      });

      return { success: true, winner: updatedWinner };
   } catch (error) {
      console.error('Error in createWinner:', error);
      return {
         success: false,
         error: error instanceof Error ? error.message : 'Unknown error',
      };
   }
}

export async function getWinners() {
   try {
      const winners = await prisma.winner.findMany({
         orderBy: { score: 'desc' },
      });
      return { success: true, winners };
   } catch (error) {
      console.error('Error fetching winners:', error);
      return { success: false, error: 'Internal Server Error' };
   }
}
