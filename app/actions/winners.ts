'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function checkEmailExists(email: string): Promise<boolean> {
   try {
      const winner = await prisma.winner.findUnique({
         where: { email },
      });
      return !!winner;
   } catch (error) {
      console.error('Error checking email existence:', error);
      throw new Error('Failed to check email existence');
   }
}

export async function createWinner(winner: {
   fullName?: string;
   email: string;
   phone?: string;
   profession?: string;
   level: string;
   score: number;
   winnerCode: string;
}) {
   try {
      // Check for required fields
      if (!winner || typeof winner !== 'object') {
         console.error('Invalid winner object:', winner);
         return { error: 'Invalid winner data', success: false };
      }

      if (
         !winner.email ||
         !winner.level ||
         typeof winner.score !== 'number' ||
         !winner.winnerCode
      ) {
         console.error('Missing required fields:', winner);
         return { error: 'Missing required fields', success: false };
      }

      console.log('Creating/Updating Winner:', winner);

      const updatedWinner = await prisma.winner.upsert({
         where: { email: winner.email },
         update: {
            fullName: winner.fullName ?? undefined,
            phone: winner.phone ?? undefined,
            profession: winner.profession ?? undefined,
            score: winner.score,
            level: winner.level,
            winnerCode: winner.winnerCode,
         },
         create: {
            fullName: winner.fullName ?? null,
            email: winner.email,
            phone: winner.phone ?? null,
            profession: winner.profession ?? null,
            level: winner.level,
            score: winner.score,
            winnerCode: winner.winnerCode,
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

      if (!winners) {
         return { success: false, error: 'No winners found' };
      }

      return { success: true, winners };
   } catch (error) {
      console.error('Error fetching winners:', error);
      return {
         success: false,
         error:
            error instanceof Error ? error.message : 'Internal Server Error',
      };
   }
}
