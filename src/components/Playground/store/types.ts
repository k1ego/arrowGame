export interface IPlaygroundStepsState {
	// step - для ключа в RandomKeys при рендере
  step: number;
  currentValue: string | null;
  entereadValue: string | null;
	success: boolean | null;
}

export interface IPlaygroundState {
  currentStep: number;
  steps: IPlaygroundStepsState[];
}
