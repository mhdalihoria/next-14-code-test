"use server";

import { allFactsType, randomFactType } from "@/types/facts";

export async function getRandomFact(): Promise<randomFactType> {
  const response = await fetch("https://catfact.ninja/fact", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed To Get Fact");
  }

  return response.json();
}

export async function getAllFacts(
  page: string | undefined
): Promise<allFactsType> {
  const response = await fetch(`https://catfact.ninja/facts?page=${page}`);

  if (!response.ok) {
    throw new Error("Failed To Get Facts");
  }

  return response.json();
}
