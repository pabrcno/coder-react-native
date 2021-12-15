import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ChallengeType from "../../../domain/types/challenge";
import baseChallenges from "../../../infrastructure/data/challenges";

interface IChallengesState {
  challenges: ChallengeType[];
}

const initialState: IChallengesState = {
  challenges: baseChallenges,
};

export const challengesSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ChallengeType>) => {
      const { id, title, completed } = action.payload;
      state.challenges.push({ id, title, completed });
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.challenges = state.challenges.filter(
        (challenge) => challenge.id !== action.payload
      );
    },
    toggleItem: (state, action: PayloadAction<ChallengeType>) => {
      const { id } = action.payload;

      state.challenges = state.challenges.map((challenge) =>
        challenge.id === id
          ? { ...challenge, completed: !challenge.completed }
          : challenge
      );
    },
  },
});

export const { addItem, removeItem, toggleItem } = challengesSlice.actions;

export default challengesSlice.reducer;
