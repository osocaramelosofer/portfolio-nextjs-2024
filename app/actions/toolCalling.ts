/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// /* eslint-disable @typescript-eslint/strict-boolean-expressions */
// Docs: Call tools
'use server';

import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';
import { type ReactNode } from 'react';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  display?: ReactNode;
}

function getWeather({ city, unit }: { city: string; unit: number }) {
  // This function would normally make an
  // API request to get the weather.
  return { value: 25, description: 'Sunny' };
}

export async function continueConversation(history: Message[]) {
  'use server';

  const { text, toolResults } = await generateText({
    model: openai('gpt-3.5-turbo'),
    system: 'You are a friendly and fun weather assistant!',
    messages: history,
    tools: {
      getWeather: {
        description: 'Get the weather for a location',
        parameters: z.object({
          city: z.string().describe('The city to get the weather'),
          unit: z
            .enum(['C', 'F'])
            .describe('The number to display the temperature in'),
        }),
        execute: async ({ city, unit }) => {
          const weather = getWeather({ city, unit });
          return `It is currently ${weather.value}° and ${weather.description} in ${city}!`;
        },
      },
      celsiusToFahrenheit: {
        description: 'Converts celsius to fahrenheit',
        parameters: z.object({
          value: z.string().describe('The value in celsius'),
        }),
        execute: async ({ value }) => {
          const celsius = parseFloat(value);
          const fahrenheit = celsius * (9 / 5) + 32;
          return `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
        },
      },
      whoIsGonnaWinEuroCup: {
        description: 'Return the name of the winner selection for the euro cup',
        parameters: z.object({}),
        execute: async (args) => {
          return 'France';
        },
      },
      getTheNumberOfPets: {
        description: 'Returns the number of the of the user',
        parameters: z.object({}),
        execute: async () => {
          return '5';
        },
      },
    },
  });

  return {
    messages: [
      ...history,
      {
        role: 'assistant' as const,
        content:
          text || toolResults.map((toolResult) => toolResult.result).join('\n'),
      },
    ],
  };
}
