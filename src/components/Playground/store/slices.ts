import { createSlice } from "@reduxjs/toolkit";

import { IPlaygroundState } from "./types";

import { ARR_ARROW_CODES } from "../constants";

export const initialState: IPlaygroundState = {
  currentStep: 0,
  steps: [],
};

export const playgroundSlice = createSlice({
  name: "playground",
  initialState,
  reducers: {
    setCurrentStep: (state) => {
      state.currentStep += 1;
    },
    setSteps: (state) => {
      const randomKeys = Math.floor(Math.random() * ARR_ARROW_CODES.length);
      // теперь при каждом шаге таймера будет создаваться новый элемент массива, в который будет помещаться стрелка
      state.steps.push({
        step: state.currentStep,
        currentValue: ARR_ARROW_CODES[randomKeys],
        entereadValue: null,
        success: null,
      });
    },
    setEnteredValue: (state, action) => {
      if (state.steps.length) {
        // сохранили пришедший объект в том знначении, в котором он пришел
        const step = state.steps[state.currentStep - 1];
        const isSuccess = step.currentValue === action.payload;
        
        // проверка на то, если уже значение в entereadValue
        if (step.entereadValue === null) {
          state.steps[state.currentStep - 1] = {
            // так перезаписал только entereadValue
            ...step,
            entereadValue: action.payload,
          };
        }
      }
    },
  },
});

export const { setCurrentStep, setSteps, setEnteredValue } =
  playgroundSlice.actions;
export default playgroundSlice.reducer;
