import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
   try {
      const body = await request.json();

      if (!body || typeof body !== 'object') {
         return NextResponse.json(
            { error: 'Invalid request body' },
            { status: 400 }
         );
      }

      const {
         fullName,
         email,
         phone,
         profession,
         level,
         score,
         wonLevels,
         winnerCode,
      } = body;

      // Validate input fields
      if (
         !email ||
         !level ||
         score === undefined ||
         !wonLevels ||
         !winnerCode
      ) {
         return NextResponse.json(
            { error: 'Missing required fields' },
            { status: 400 }
         );
      }

      // Ensure wonLevels is an array before joining
      const wonLevelsArray = Array.isArray(wonLevels) ? wonLevels : [wonLevels];

      // Fetch existing winner first
      const existingWinner = await prisma.winner.findUnique({
         where: { email },
      });

      // Extract existing won levels and merge them
      const existingLevels = existingWinner
         ? existingWinner.wonLevels.split(',')
         : [];
      const updatedWonLevels = [
         ...new Set([...existingLevels, ...wonLevelsArray]),
      ].join(',');

      // Upsert winner
      console.log('Attempting database operation...');
      const winner = await prisma.winner.upsert({
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
      console.log('Database operation successful');

      console.log('winner', winner);

      // Ensure we're returning a plain object, not a Prisma model instance
      const safeWinner = JSON.parse(JSON.stringify(winner));
      console.log('safeWinner', safeWinner);
      return;
   } catch (error) {
      console.error('Detailed error in POST /api/winners:', error);

      if (error instanceof Error) {
         return NextResponse.json(
            { success: false, error: error.message, stack: error.stack },
            { status: 500 }
         );
      } else {
         return NextResponse.json(
            { success: false, error: 'An unexpected error occurred' },
            { status: 500 }
         );
      }
   }
}

export async function GET() {
   try {
      const winners = await prisma.winner.findMany({
         orderBy: { score: 'desc' },
      });

      return NextResponse.json(winners);
   } catch (error) {
      console.error('Error in GET /api/winners:', error);

      return NextResponse.json(
         { error: 'Internal Server Error' },
         { status: 500 }
      );
   }
}
