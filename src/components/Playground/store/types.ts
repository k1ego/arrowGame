export interface IPlaygroundStepsState {
	currentValue: string | null;
	entereadValue: string | null;
}


export interface IPlaygroundState {
	currentStep: number;
	steps: IPlaygroundStepsState[];
}
